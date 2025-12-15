export interface Product {
  _id: string;
  productImage: string;

  nameEN: string;
  nameAR: string;

  desEN: string;
  desAR: string;

  price: number;
  quantity: number;

  typeEN: string;
  typeAR: string;

  size: string;

  unitEN: string;
  unitAR: string;

  category: string;

  createdAt?: string;
  updatedAt?: string;
}
