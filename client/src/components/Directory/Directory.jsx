import React, { Component } from 'react';

import DirectoryData from '../../directory.data.js';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: DirectoryData,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        hue
      </div>
    );
  }
}
