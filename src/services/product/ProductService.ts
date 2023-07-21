import client from "../client";
import axios, { AxiosResponse } from "axios";
import { ProductType, PostProductType, PutProductType } from "../../types/ProductType";

interface ProductListResponse extends AxiosResponse {
  data: ProductType;
}
interface PostProductResponse extends AxiosResponse {
  data: PostProductType;
}

interface PutProductResponse extends AxiosResponse {
  data: PutProductType;
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

// Get Product By ID
export const getProductById = async (id: number) => {
  try {
    const res: AxiosResponse = await client<ProductListResponse>({
      url: `/api/v1/ProductList/${id}`,
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

// Update Product
export const updateProducts = async ({
  id,
  name,
  imageSrc,
  price,
  color,
  size,
  inStock,
  leadTime,
}: PutProductType) => {
  try {
    const res: AxiosResponse = await client<PutProductResponse>({
      url: `/api/v1/ProductList/${id}`,
      method: "put",
      data: {
        name,
        imageSrc,
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

// Delete Product
export const deleteProducts = async (id: number) => {
  try {
    const res: AxiosResponse = await client<PostProductResponse>({
      url: `/api/v1/ProductList/${id}`,
      method: "delete",
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
