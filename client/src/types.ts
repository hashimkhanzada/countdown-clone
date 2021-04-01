export interface Product {
  _id?: string;
  subCategory?: string;
  claims?: string;
  decimalPrice?: string;
  image?: string;
  ingredients?: string;
  isOnSale?: boolean;
  madeIn?: string;
  mainCategory?: string;
  name?: string;
  originalPrice?: string;
  pricePerSpecificUnit?: string;
  saleType?: [string];
  specificUnit?: string;
  totalPrice?: number;
  weight?: number;
  weightUnit?: string;
  description?: string;
}

export interface CartProduct extends Product {
  quantity?: number;
  calculatedPrice?: number;
  totalPrice?: number;
}

export interface Order {
  quantity: number;
  productSubTotal: number;
  productId: string;
  productImage: string;
  productName: string;
}

export interface Receipt {
  address: string;
  createdAt: string;
  deliveryDate: string;
  orderItems: [];
  totalPrice: number;
  user: string;
  _id: string;
}
