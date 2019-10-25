// import React
import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';

// import local components
import placeholder from './placeholder.png';

// import local styling
import './index.scss';

const ImageWrapper = ({ imgSrc, imgAltText }) => {
  return (
    <div className="progressive-image-wrapper">
      <ProgressiveImage src={imgSrc} placeholder={placeholder} delay={3000}>
        {(src, downloadingImg) => {
          return (
            <img
              className={`progressive-image ${downloadingImg ? 'loading' : ''}`}
              src={src}
              alt={imgAltText}
            />
          );
        }}
      </ProgressiveImage>
    </div>
  );
};

ImageWrapper.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAltText: PropTypes.string.isRequired,
};

export default ImageWrapper;
