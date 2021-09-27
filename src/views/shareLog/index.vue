<template>
  <h1>分享记录</h1>
  <div id="mycharts" ref="myRef" class="chart-box" />
  <div id="lineChart" ref="lineChartRef" class="chart-box" />
</template>

<script lang="ts">
import * as echarts from "echarts";
import { chartOptions, lineChartOptions } from "./chartOptions";
import { ref, onMounted } from "vue";
import { getHello } from "@/api/house";
export default {
  setup() {
    const myRef = ref(null);
    const lineChartRef = ref(null);
    const initT = async () => {
      await getHello();
      const chartDom = document.getElementById("mycharts");
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        myChart.setOption(chartOptions);
      }
      const lineChartDom = document.getElementById("lineChart");
      if (lineChartDom) {
        const lineChart = echarts.init(lineChartDom);
        lineChart.setOption(lineChartOptions);
      }
    };
    onMounted(async () => {
      await initT();
      window.onresize = () => {
        initT();
      };
    });
    return {
      myRef,
      lineChartRef,
    };
  },
};
</script>

<style scoped lang="less">
.chart-box {
  width: 372px;
  height: 372px;
}
</style>
