import { defineStore } from 'pinia'

interface FiltersStoreState {
  query: string;
}

export const useFiltersStore = defineStore('filters', {
  state: (): FiltersStoreState => ({
    query: ''
}),
  actions: {
    async setFilterQuery(query: string) {
        this.query = query;
    }
  }
})