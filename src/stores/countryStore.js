import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountryStore = defineStore('country', () => {
    const countryData = ref({})

    function $reset() {
        countryData.value = {}
    }

    return { countryData, $reset }
})