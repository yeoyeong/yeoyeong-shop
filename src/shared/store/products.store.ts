import { create } from "zustand";
import { Product } from "./products.store-type";

interface ID {
  products: Product[];
  setProducts: (action: (prev: Product[]) => Product[]) => void;
}

const productsStore = create<ID>((set) => ({
  products: [],
  setProducts: (action) => {
    set((prev) => ({ products: action(prev.products) }));
  },
}));

export default productsStore;
