import { ref, computed } from 'vue'

export default function useHouseNameSearch(houseList) {
 
  const searchQuery = ref('')
  const listMatchingSearchQuery = computed(() => {
    return houseList.value.filter(item => {
      return item.name.includes(searchQuery.value)
    })
  })

  return {
    searchQuery,
    listMatchingSearchQuery
  }
}