import React, { useContext } from 'react';

import MenuItem from '../MenuItem/MenuItem';

import DirectoryContext from '../../contexts/directory/DirectoryContext';

import './Directory.scss';

const Directory = () => {
  const directory = useContext(DirectoryContext);
  const { sections } = directory;

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
