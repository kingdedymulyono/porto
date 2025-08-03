import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function MyComponent() {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  );
}

export default MyComponent;