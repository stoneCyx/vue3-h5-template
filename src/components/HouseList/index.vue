<template>
  <div class="title"> 
    新房列表
  </div>
  <van-search 
    v-model="searchQuery" 
    placeholder="请输入搜索关键词"
  /> 
  <ul>
    <li 
      v-for="(item,index) of houseList" 
      :key="index"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { toRefs } from 'vue'
import useHouseList from './composables/useHouseList'
import useHouseNameSearch from './composables/useHouseNameSearch'
/* eslint-disable */
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  setup(props) {

    const { type } = toRefs(props);
    const { houseList } = useHouseList(type);
    const { searchQuery, listMatchingSearchQuery } = useHouseNameSearch(houseList);
    return {
      houseList:listMatchingSearchQuery,
      searchQuery,
    }
  },
}
</script>

<style scoped lang="less">
.title{
  color:blue;
  font-size: 20px;
}
ul {
  li {
    color: pink;
    font-size:14px;
  }
}
</style>
