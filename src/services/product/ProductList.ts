import client from "../client";
import axios, { AxiosResponse } from "axios";
import { ProductType, PostProductType } from "../../types/ProductType";

interface ProductListResponse extends AxiosResponse {
  data: ProductType;
}
interface PostProductResponse extends AxiosResponse {
  data: PostProductType;
}

// Get List Product
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

// Create Product
export const createProducts = async ({
  name,
  imageSrc,
  imageAlt,
  price,
  color,
  size,
  inStock,
  leadTime,
}: PostProductType) => {
  try {
    const res: AxiosResponse = await client<PostProductResponse>({
      url: "/api/v1/ProductList",
      method: "post",
      data: {
        name,
        href: '#',
        imageSrc,
        imageAlt,
        price,
        color,
        size,
        inStock,
        leadTime,
      },
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
