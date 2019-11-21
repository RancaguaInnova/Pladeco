import React from 'react'
import PropTypes from 'prop-types'
import Viewer from 'react-viewer'
const ImageViewerField = ({ source, record, label = {} }) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <div className='gridImages'>
      {record[source] &&
        record[source].map((item, i) => {
          return (
            <div
              key={i}
              className='imagesAccion'
              onClick={() => {
                setVisible(true)
              }}
            >
              <img className='ImageViewerField' src={item.src} alt={item.title}></img>
            </div>
          )
        })}
      {record[source] && (
        <Viewer
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
          images={record[source]}
        />
      )}
    </div>
  )
}
ImageViewerField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired
}

export default ImageViewerField
