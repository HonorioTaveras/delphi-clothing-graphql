import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import { selectCollection } from '../../redux/shop/shopSelector';
import CollectionsContext from '../../contexts/collections/CollectionsContext';

import './Collection.scss';

const CollectionPage = ({ match }) => (
  <CollectionsContext.Consumer>
    {(collections) => {
      const collection = collections[match.params.collectionId];
      const { title, items } = collection;
      return (
        <div className="collection-page">
          <h2 className="title">{title}</h2>
          <div className="items">
            {items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      );
    }}
  </CollectionsContext.Consumer>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default CollectionPage;
