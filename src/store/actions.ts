import { getNewHouse } from "@/api/house"
import { ActionContext } from "vuex";
import { stateType } from "./state";
//ActionContext<rootState,moudleState>
export default {
  async fetchHouse(ctx:ActionContext<stateType,stateType>):Promise<void>{
    const list  = await getNewHouse();
    ctx.commit('SAVE_HOUSELIST',list)
  },
}
