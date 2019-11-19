const firebase = require("firebase");
require("firebase/firestore");
const _ = require("lodash");

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASED_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
});

var db = firebase.firestore();
var storage = firebase.storage();
var storageRoot = storage.ref();
db.settings({
  timestampsInSnapshots: true
});

/**
 * Utility function to upload a file in a Firebase storage bucket
 *
 * @param {File} rawFile the file to upload
 * @param {File} storageRef the storage reference
 * @returns {Promise}  the promise of the URL where the file can be download from the bucket
 */

async function uploadFileToBucket(rawFile, storageRef) {
  try {
    const snapshot = await storageRef.put(rawFile);
    return await snapshot.ref.getDownloadURL();
  } catch (error) {
    throw new Error({ message: error.message_, status: 401 });
  }
}

/**
 * Utility function to create or update a file in Firestore
 *
 * @param {String} resource resource name, will be used as a directory to prevent an awful mess in the bucket
 * @param {File} rawFile the file to upload if it is not already there
 * @param {Function} uploadFile the storage reference
 * @returns {Promise}  the promise of the URL where the file can be download from the bucket
 */

async function createOrUpdateFile(resource, rawFile, uploadFile) {
  var storageRef = storageRoot.child(resource + "/" + rawFile.name);

  try {
    var metadata = await storageRef.getMetadata();
    if (metadata && metadata.size === rawFile.size) {
      const downloadUrl = await storageRef.getDownloadURL();
      return downloadUrl;
    } else {
      const uploaded = await uploadFile(rawFile, storageRef);
      return  uploaded;
    }
  } catch(error) {
  }
}

async function createOrUpdateFiles(resource, Files, uploadFile) {
  try {
    await Files.forEach(async function (item) {
      var urlDownload = await createOrUpdateFile(
        resource,
        item.rawFile,
        uploadFile
      );
      delete item.rawFile;
      item.src = urlDownload;
    });
  } catch(error) {
    console.error("File already exists");
  }
  return Files;
}

function listAllProperties(o) {
  var objectToInspect;
  var result = [];

  for (
    objectToInspect = o;
    objectToInspect !== null;
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  ) {
    result = result.concat(Object.entries(objectToInspect));
  }

  return result;
}

const addUploadCapabilities = requestHandler => async (
  type,
  resource,
  params
) => {
  if (type === "UPDATE" || type === "CREATE") {
    var Properties = listAllProperties(params.data);
    const filesToUpload = []

    // Iter on fields ([key, value]) of initial "data" object
    Properties.forEach((keyValuePair) => {
      const [ key, value ] = keyValuePair;
      if (value && typeof value === "object" && value.length) {
        value.forEach(fileCandidate => {
          if (_.has(fileCandidate, "rawFile")) {
            // file confirmed (fileCandidate is a file object)
            fileCandidate.fieldKey = key;
            filesToUpload.push(fileCandidate);
          }
        })
      }
    })

    await createOrUpdateFiles(resource, filesToUpload, uploadFileToBucket);
    return requestHandler(type, resource, params);
  } else {
    return requestHandler(type, resource, params);
  }
};
export default addUploadCapabilities;
