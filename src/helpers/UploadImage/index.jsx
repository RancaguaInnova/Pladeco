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
console.log(process.env);
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

  for (
    objectToInspect = o;
    objectToInspect !== null;
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  ) {
    result = result.concat(Object.entries(objectToInspect));
  }

  return result;
}
const addUploadCapabilities = requestHandler => (type, resource, params) => {
  if (type === "UPDATE" || type === "CREATE") {

    var Properties = listAllProperties(params.data);

    Properties.map(function(item) {
      let name=''
      item.map(function(atributo, index) {
        console.log("Properties items:", atributo);
        console.log("Properties items:", index);
        if(index==0){
          name=atributo
        }
        if(index==1){
         if(atributo &&  atributo.rawFile){
          const rawFile = atributo.rawFile
          return Promise.resolve(createOrUpdateFile(resource, rawFile, uploadFileToBucket))
  
          .then(urlDownloadImage => {
          
            delete params.data[name].rawFile;
            delete params.data[name].src;
            var pictures = params.data[name];
            pictures.src = urlDownloadImage;
  
            // or delete person["age"]; 
            requestHandler(type, resource, {
              ...params,
              data: {
                [name]:pictures
              }
            })
          })
         }
        }
      });
    });

  }
 
  return requestHandler(type, resource, params);
};
export default addUploadCapabilities;
