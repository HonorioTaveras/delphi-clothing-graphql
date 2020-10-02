import React, { Component } from 'react';

import MenuItem from '../MenuItem/MenuItem.jsx';
import DirectoryData from '../../directoryData.js';
import './Directory.scss';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: DirectoryData,
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({
          title, imageUrl, id, size,
        }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
