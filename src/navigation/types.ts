// import { Product } from '../data/mockData';

import { Produto, Usuario } from "../types";

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
  // Checkout: undefined;
  Cart: undefined;
  // Profile: undefined;
};

export type BottomTabParamList = {
  HomeTab: undefined;
  CategoriesTab: undefined;
  FavoritesTab: undefined;
  OrdersTab: undefined;
  ProfileTab: undefined;
  ProductDetail: {
    produto: Produto
  };
};
