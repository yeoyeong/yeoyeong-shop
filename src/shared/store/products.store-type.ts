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
  content: string;
  sizeList: string[];
  createdAt: createdAt;
  detailImg: string;
  rating: string;
  order_quantity: string;
};
