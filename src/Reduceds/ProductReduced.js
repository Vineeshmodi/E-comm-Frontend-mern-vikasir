import {
  All_Product_Request, All_Product_Success, All_Product_Failed
}
  from "../Constants/ProductConstant.js"
  ;

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
      case All_Product_Request:
          return {
              loading: true,
              products: []
          };
      case All_Product_Success:
          return {
              loading: false,
              products: action.payload.products
          };
      case All_Product_Failed:
          return {
              loading: false,
              error: action.payload
          };
      default:
          return state;
  }
}