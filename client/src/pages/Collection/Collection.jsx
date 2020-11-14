import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import { selectCollection } from '../../redux/shop/shopSelector';

import {
  CollectionPageContainer,
  CollectionPageTitle,
  CollectionItems,
} from './Collection.styles';

const CollectionPage = ({ collection }) => {
  console.log('collection: ', collection);
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionPageTitle>{title}</CollectionPageTitle>
      <CollectionItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
