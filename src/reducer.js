import React from 'react'
const getFilteredProduct = (product,productList) => {
  return productList.filter(pdt => {
    return pdt.name.indexOf(product) > 0;
  })
}
const reducer = (state={},action) => {
    switch (action.type) {
      case "BLUE_THEME":
        return {
          ...state,
          isRed: false,
          isBlue: true,
        };
      case "RED_THEME":
        return {
          ...state,
          isRed: true,
          isBlue: false,
        };
      case "DISPLAY_PRODUCT":
        return {
          ...state,
          productList: action.payload,
        };
      case "CHECKOUT_PRODUCT":
        return {
          ...state,
          checkedProduct: [...state.checkedProduct, action.payload],
        };
      case "PREPARE_CHECKOUT":
        return {
          ...state,
          checkoutList: [...state.checkedProduct],
        };
      case 'FILTER_PRODUCT':
        return {
          ...state,
          filteredProduct: getFilteredProduct(action.payload,state.productList)
        }
      default:
        return state;
    }
}

export default reducer
