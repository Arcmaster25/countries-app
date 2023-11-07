export const countryService = {
    getByName: async (name) => {
        let response = await fetch('https://restcountries.com/v3.1/name/'+name)
        let data = await response.json()
        return data
    }
}