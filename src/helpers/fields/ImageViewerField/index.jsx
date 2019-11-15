import React from 'react';
import PropTypes from 'prop-types';
import Viewer from 'react-viewer';
import './styles.scss'  
const ImageViewerField = ({ source, record,label = {} }) => {
    const [visible, setVisible] = React.useState(false);

    return (
        <div>
            <div>{label}</div>
            <div onClick={() => { setVisible(true); }}> <img className='ImageViewerField' src={record[source].src} title={record[source].title}></img>
            </div>
            <Viewer
                visible={visible}
                onClose={() => { setVisible(false); }}
                images={[{ src: record[source].src, alt: record[source].title }]}
            />
        </div>
    )
}
ImageViewerField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

export default ImageViewerField;