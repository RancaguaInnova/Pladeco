const Upload = item => {
  return firebase
    .storage()
    .ref()
    .child('images/' + item.title)
    .put(item.rawFile)
    .then(snapshot => {
      // console.log('One success:', snapshot.downloadURL)
      return snapshot.downloadURL
    })
    .catch(error => {
      console.log('One failed:', item, error.message)
      return error
    })
}
export default Upload
