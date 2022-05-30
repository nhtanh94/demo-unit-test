export interface Auth {
  success: boolean;
  data: {
    userName:string;
    token:string;
  } | null;
  error:{
    errCode:number;
    errMessage?:string;
  }|null
}
