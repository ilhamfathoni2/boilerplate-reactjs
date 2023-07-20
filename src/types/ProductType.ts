export interface ProductType {
  id: number;
  name?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  price: number;
  color?: string;
  size?: string;
  inStock?: boolean;
  leadTime?: string;
  qty?: number;
}

export interface TotalItemType {
  id?: number;
  qty: number;
}

export interface PostProductType {
  name?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  price: number;
  color?: string;
  size?: string;
  inStock?: boolean;
  leadTime?: string;
  qty?: number;
}