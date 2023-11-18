import React, { useState } from 'react';

const FlashContent = (props) => {
  const { id, description, img } = props.data;
  const [showImageViewer, setShowImageViewer] = useState(false);

  return (
    <div id='flashes' className='flash-thumbnail'>
      <img src={img} onClick={() => setShowImageViewer(true)} />
      <div className='content fade'>
        {id}
      </div>
      {showImageViewer && (
        <div className='image-viewer'>
          <img src={img} />
          <button onClick={() => setShowImageViewer(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FlashContent;

