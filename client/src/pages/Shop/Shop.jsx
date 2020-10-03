import React, { Component } from 'react';

import shopData from './shopData';

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData,
    };
  }

  render() {
    return (
      <div>SHOP PAGE</div>
    );
  }
}
