import { getHello } from "@/api/house"
import { ActionContext } from "vuex";
import { stateType } from "./state";
export default {
  async fetchHouse(ctx:ActionContext<stateType,stateType>):Promise<void>{
    const list  = await getHello();
    ctx.commit('SAVE_HOUSELIST',list)
  },
}
