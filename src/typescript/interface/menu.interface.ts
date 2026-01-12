export interface Menu {
  name: string;
  description: string;
  price:string | number;
  image: string;
  ratings?: number | string;
  catagoty?: string;
  id?: string;
}
