import React from "react";
import PropTypes from "prop-types";
import Viewer from "react-viewer";
import "./styles.scss";
const ImageViewerField = ({ source, record, label = {} }) => {
  const [visible, setVisible] = React.useState(false);
  console.log(record);
  return (
    <div>
      {record[source] &&
        record[source].map((item, i) => {
          return (
            <div key={i}>
              <div
                onClick={() => {
                  setVisible(true);
                }}
              >
                <img
                  className="ImageViewerField"
                  src={item.src}
                  title={item.title}
                ></img>
              </div>
              <Viewer
                visible={visible}
                onClose={() => {
                  setVisible(false);
                }}
                images={[{ src: item.src, alt: item.title }]}
              />
            </div>
          );
        })}
    </div>
  );
};
ImageViewerField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired
};

export default ImageViewerField;
