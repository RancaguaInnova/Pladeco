const Upload = item => {
  return firebase
    .storage()
    .ref()
    .child('images/' + item.title)
    .put(item.rawFile)
    .then(snapshot => {
      return snapshot.downloadURL
    })
    .catch(error => {
      return error
    })
}
export default Upload
