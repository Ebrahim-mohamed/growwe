export type productType = {
  img: string;
  header: string;
  price: string;
  description: string;
  type: string;
  id: string;
};

export type productSectionType = {
  header: string;
  link: string;
  to: string;
  products: productType[];
};

export type PartTowInSecondSectionType = {
  header: string;
  boxes1: string[];
  boxes2: string[];
  mainPra: string;
  des: string;
};
