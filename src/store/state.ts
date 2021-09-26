export default {
  houseList:[]
}
export interface houseListType{
  name:string;
  price:string
}
export interface stateType{
  houseList:Array<houseListType>;
} 