<template>
  <h1>关于我们</h1>
  <div class="wrapper">
    <div>
      阿斯顿发 ad发搭嘎是大法奥德赛股份ad高度发个是大法官说的分公司电饭锅说的返回方式是否搞活动费搞活动费改好电饭锅和地方改好地方搞活动费改好地方更好的发过火地方改好的风格好地方更好的发过火地方改好电饭锅好的发过火的发挥地方改好地方换个地方更好的发过火东方红的
    </div>
  </div>
</template>
<script lang="ts" >
//上拉加载
import BetterScroll from 'better-scroll'
import { onMounted,defineComponent } from 'vue';

export default defineComponent({
  setup(){
    let scroll;
    onMounted(()=>{
     scroll= new BetterScroll(".wrapper", {
        scrollY: true,
        // 上拉距离超过10px时触发 pullingUp 事件
        pullUpLoad: {
          threshold: -10, 
        },
      });
      scroll.on("pullingUp", () => {
        console.log('pullingUp触发,加载数据')
      });
    });
  }
})
</script>
<style scoped lang="less">
h1,.wrapper{
  font-size:14px;
}
.wrapper{
    height:100px;
    width: 150px;
    margin:0 auto;
    border:1px solid #000;
    overflow-y:auto;
}
</style>
