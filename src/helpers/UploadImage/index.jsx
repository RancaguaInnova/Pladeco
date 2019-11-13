const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDbQVLaL2GnH4_hS3i3mDTtabTo1HWN04E",
  authDomain: "pladeco-1.firebaseapp.com",
  databaseURL: "https://pladeco-1.firebaseio.com",
  projectId: "pladeco-1",
  storageBucket: "gs://pladeco-1.appspot.com",
  messagingSenderId: "750733626245"
});

var db = firebase.firestore();
var storage = firebase.storage();
var storageRoot = storage.ref();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

/**
 * Utility function to flatten firestore objects, since 'id' is not a field in FireStore
 *
 * @param {DocumentSnapshot} DocumentSnapshot Firestore document snapshot
 * @returns {Object} the DocumentSnapshot.data() with an additionnal "Id" attribute
 */

function getDataWithId(DocumentSnapshot) {
  var dataWithId = {};
  // console.log('getDataWithId Id=', DocumentSnapshot.id)
  if (DocumentSnapshot) {
    dataWithId = {
      id: DocumentSnapshot.id,
      ...DocumentSnapshot.data()
    };
  }
  // console.log(dataWithId);
  return dataWithId;
}

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
      console.log(error);
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
      console.log(metadata);
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

function listAllProperties(o) {
  var objectToInspect;
  var result = [];

  for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
    result = result.concat(Object.entries(objectToInspect));
  }

  return result;
}
const addUploadCapabilities = requestHandler => (type, resource, params) => {


  if (type === "UPDATE" || type === "CREATE") {
    console.log(params)
    console.log(params.data.pictures)
    var Properties = listAllProperties(params.data)
    console.log("listAllProperties", Properties)

    Properties.map(function (item) {

      console.log("Properties items:", item)
    })
    /* if (params.data.pictures) {
        const rawFile = params.data.pictures.rawFile
        console.log("newPictures", rawFile)
        return Promise.resolve(createOrUpdateFile(resource, rawFile, uploadFileToBucket))
  
          .then(urlDownloadImage => {
            console.log("urlDownloadImage", urlDownloadImage)
            delete params.data.pictures.rawFile;
            delete params.data.pictures.src;
            var pictures = params.data.pictures
            pictures.src = urlDownloadImage;
  
            // or delete person["age"]; 
            requestHandler(type, resource, {
              ...params,
              data: {
                ...params.data,
                pictures: pictures
              }
            })
          })
  
  
        // const urlImage = createOrUpdateFile(resource, params.data.pictures.rawFile, uploadFileToBucket);
  
  
  
      }
  */
  }
  console.log(params, "params ---a")
  return requestHandler(type, resource, params);
};
export default addUploadCapabilities;
