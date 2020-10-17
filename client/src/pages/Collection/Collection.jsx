import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/CheckoutItem/CheckoutItem';

import { selectCollection } from '../../redux/shop/shopSelector';

import './Collection.scss';

const CollectionPage = ({ collection }) => {
  console.log('collection: ', collection);
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
