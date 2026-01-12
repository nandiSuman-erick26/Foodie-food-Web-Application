export interface signupSchema {
  fullname: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  image?: File | null;
}

export interface LoginSchema{
  name?:string
  email:string
  password:string
}