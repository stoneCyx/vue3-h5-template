import { fetchHouseList } from '@/api/house'
import { ref, onMounted, watch } from 'vue'

export default function useHouseList(type) {
  let houseList = ref([]);
  const getHouseList = async () => {
    houseList.value = await fetchHouseList(type);
  }
  onMounted(getHouseList);
  watch(type,getHouseList);
  return {
    houseList,
    getHouseList
  }
}