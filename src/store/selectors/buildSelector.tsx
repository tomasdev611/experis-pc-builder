import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state: any) => state.build;

export const selectItems = createSelector(
  selectSelf,
  (build) => build.items
);

export const selectCartItems = createSelector(
  selectSelf,
  (build) => build.cartItems
);