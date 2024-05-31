export type colorList = {
  colorName: string;
  colorCode: string;
};

type category = "outer" | "skirt" | "top" | "bottom";

export type createdAt = {
  seconds: number;
  nanoseconds: number;
};
export type Product = {
  id: string;
  price: string;
  colorList: colorList[];
  thumbnail: string;
  category: category;
  title: string;
  shippingFee: string;
  content: string;
  sizeList: string[];
  createdAt: createdAt;
  detailImg: string;
  rating: number;
  order_quantity: number;
};

export type CartProduct = {
  count: number;
  productId: string;
  color: colorList;
  size: string;
  shippingFee: string | undefined;
  price: string;
  thumbnail: string;
  title: string;
};
