import { stateType,houseListType } from "./state"
export default {
  SAVE_HOUSELIST(state:stateType,houseList:Array<houseListType>):void{
    state.houseList = houseList;
  }
}
