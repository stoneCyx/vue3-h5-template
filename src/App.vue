<template>
  <div id="app">
    <router-view />
    <van-popup
      v-model:show="show"
      position="bottom" 
      closeable
      :style="{ height: '50%', overflow: 'hidden' }"
    >
      <div
        class="home-popup-box"
        :style="{
          width: '90%',
          margin: '0 auto',
          padding: '50px 0 10px 0',
          overflow: 'hidden',
          height: '100%',
        }"
      >
        <van-cell-group
          :style="{ overflow: 'auto', height: 'calc(100% - 64px)' }"
        >
          <van-cell
            v-for="(route, index) of routes"
            :key="index"
            :title="route.meta && route.meta.title"  
            :to="route.name"
            is-link  
            @click="closeNavigation"
          />
        </van-cell-group>
      </div>
    </van-popup>
    <van-popup 
      v-model="show" 
      position="bottom" 
      :style="{ height: '30%' }" 
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const router = useRouter();
    const routes = router?.options?.routes;
    const store = useStore();

    const state = reactive({
      routes: routes.filter((item) => item.name),
      show: false,
    });
      
    console.log('运行环境：',import.meta.env.MODE);
    console.log('base url：',import.meta.env.VITE_APP_BASE_URL);

    //按+显示菜单按钮，按-隐藏菜单按钮
    document.onkeydown = e=>{
      if(e?.keyCode === 49){
        state.show = true;
      }
      if(e?.keyCode === 50){
         state.show = false;
      }
    }
    onMounted(async () => {
      store.dispatch('fetchHouse');
    })
    const closeNavigation = ()=>{
      state.show = false;
    };
    return {
      ...toRefs(state),
      closeNavigation
    };
  },
});
</script>