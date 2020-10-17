/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

export default ShopPage;
