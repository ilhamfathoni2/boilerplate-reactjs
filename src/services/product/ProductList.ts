import client from "../client";
import axios, { AxiosResponse } from "axios";
import { ProductType } from "../../types/ProductType";

interface ProductListResponse extends AxiosResponse {
  data: ProductType;
}

export const getListProducts = async () => {
  try {
    const res: AxiosResponse = await client<ProductListResponse>({
      url: "/api/v1/ProductList",
      method: "get",
    });
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error?.response ?? null;
    } else {
      return null;
    }
  }
};
