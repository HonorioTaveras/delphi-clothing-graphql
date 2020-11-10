/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './CartIcon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer src={`/${ShoppingIcon}`} alt="Shopping Icon" />
    <ItemCountContainer className="item-count">{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
