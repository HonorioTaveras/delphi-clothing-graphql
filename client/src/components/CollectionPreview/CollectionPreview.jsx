/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';

import {
  CollectionPreviewContainer,
  TitleHeader,
  PreviewContainer,
} from './CollectionPreview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleHeader>{title.toUpperCase()}</TitleHeader>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
