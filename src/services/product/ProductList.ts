import client from "../client";
import axios, { AxiosResponse } from "axios";
import { ProductType } from "../../types/ProductType";

interface ProductListResponse extends AxiosResponse {
  data: ProductType;
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
  href,
  imageSrc,
  imageAlt,
  price,
  color,
  size,
  inStock,
  leadTime,
}: {
  name: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  color: string;
  size: string;
  inStock: boolean;
  leadTime?: string;
}) => {
  try {
    const res: AxiosResponse = await client<ProductListResponse>({
      url: "/api/v1/ProductList",
      method: "post",
      data: {
        name,
        href,
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
