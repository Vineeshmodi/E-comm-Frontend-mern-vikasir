import {
    All_Product_Request,
    All_Product_Success,
    All_Product_Failed,
  } from "../Constants/ProductConstant.js";
  import axios from "axios";
  
  export const GetProduct = async (dispatch) => {
    try {
      dispatch({ type: All_Product_Request });
  
      const { data } = await axios.get("/api/products");
      dispatch({
        All_Product_Success,
        payload: data,
      });
    } catch (error) {}
  };
  