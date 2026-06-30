// import { Product } from '../data/mockData';

import { Usuario } from "../types";

export type RootStackParamList = {
  Landing: undefined;
  Register: undefined;
  Password: {
    usuario: Usuario;
  };
  Success: undefined;
  Login: undefined;
  MainTabs: undefined;
  // Categories: undefined;
  // Products: { categoryId: string; categoryName: string };
  // ProductDetail: { product: Product };
  // Checkout: undefined;
  Cart: undefined;
  // Profile: undefined;
};
