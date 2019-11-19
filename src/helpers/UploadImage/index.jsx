const firebase = require("firebase");
require("firebase/firestore");

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
  return storageRef
    .put(rawFile)
    .then(snapshot => {
      return storageRef.getDownloadURL();
    })
    .catch(error => {
      throw new Error({ message: error.message_, status: 401 });
    });
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

  return storageRef
    .getMetadata()
    .then(metadata => {
      if (metadata && metadata.size === rawFile.size) {
        return storageRef.getDownloadURL();
      } else {
        return uploadFile(rawFile, storageRef);
      }
    })
    .catch(() => {
      return uploadFile(rawFile, storageRef);
    });
}

async function createOrUpdateFiles(resource, Files, uploadFile) {
  Files.map(async function (item, index) {
    var urlDownload = await createOrUpdateFile(
      resource,
      item.rawFile,
      uploadFile
    );
    delete item.rawFile;
    item.src = urlDownload;
  });
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
    console.log("params 0", params)
    await Properties.map(async function (item) {
      let name = "";
      await item.map(async function (atributo, index) {
        if (index === 0) {
          name = atributo;
        }
        if (index === 1) {
          if (atributo && atributo.rawFile) {
            const rawFile = atributo.rawFile;
            var urlDownloadImage = await createOrUpdateFile(
              resource,
              rawFile,
              uploadFileToBucket
            );
            delete params.data[name].rawFile;
            delete params.data[name].src;
            var pictures = params.data[name];
            pictures.src = urlDownloadImage;
            console.log("params 1", params)

            let data={...params.data, [name]: files}
            params = {
              ...params,data
            };
          }
          if (atributo && Array.isArray(atributo) && atributo[0].rawFile) {
            var files = await createOrUpdateFiles(
              resource,
              atributo,
              uploadFileToBucket
            );
           let data={...params.data, [name]: files}
            params = {
              ...params,data
            };
            console.log("params 2", params)

          }
        }
      });
    });
    console.log("params 3", params)

    return requestHandler(type, resource, params);
  } else {
    return requestHandler(type, resource, params);
  }

  //console.log("return")


  //
};
export default addUploadCapabilities;
