/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../CollectionItem/CollectionItem';

import {
  CollectionPreviewContainer,
  TitleHeader,
  PreviewContainer,
} from './CollectionPreview.styles';

const CollectionPreview = ({
  title, items, history, match, routeName,
}) => (
  <CollectionPreviewContainer>
    <TitleHeader onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleHeader>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
