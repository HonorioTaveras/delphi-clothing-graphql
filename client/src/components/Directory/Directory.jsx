import React, { Component } from 'react';

import MenuItem from '../MenuItem/MenuItem';
import DirectoryData from './directoryData';
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
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
