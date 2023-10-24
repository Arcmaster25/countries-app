export const countryService = {
    getByName: (name, obj) => {
        obj = fetch('https://restcountries.com/v3.1/name/'+name)
        .then(response => response.json())
        .then(data => {
            let country = data
            return country
        })

        return 0

    }
}