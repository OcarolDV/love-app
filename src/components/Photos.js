import React from 'react';
import { generatePhotoFilenames } from '../utils';
import './Photos.css';

function Photos() {
  // Generate the list of photo filenames
  const photoList = generatePhotoFilenames('d', 10, 'jpg');

  return (
    <div className="photos-page-container">
      <div className="fixed-width-container">
        <div className="photos-title">
          <h1>Happy Monthsary Baby &lt;3</h1>
        </div>
        <div className="photo-gallery">
          {photoList.map((photo, index) => (
            <div className="photo-container" key={index}>
              <img src={`${process.env.PUBLIC_URL}/photos/${photo}`} alt={`Photo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photos;