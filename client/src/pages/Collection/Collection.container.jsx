import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionPage from './Collection';
