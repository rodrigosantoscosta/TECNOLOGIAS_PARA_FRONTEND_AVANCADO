type Country = {
    name: {common: string};
    capital: string[];
    population: number;
    flags: {png: string};
}

 const fetchCountryDetails = async () =>   {    
    const input = document.querySelector('#countryInput') as HTMLInputElement;
    const resultEl = document.querySelector('#result') as HTMLElement;
    resultEl.innerHTML = '';

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(input.value.trim())}`);
        const data = await response.json();

        if (!response.ok || !data || data.status === 404) {
            resultEl.textContent = 'Country not found.';
            return;
        }

        const country : Country = {
            name: data[0].name.common,
            capital: data[0].capital,
            population: data[0].population,
            flags: data[0].flags.png
        };

        displayCountryDetails(country);
    } catch (err) {
        resultEl.textContent = 'Error fetching country details.';
        
      console.error(err);
    }
}

function displayCountryDetails(country: Country) {
    const resultEl = document.querySelector('#result') as HTMLElement;
    if (!resultEl) return;

    resultEl.innerHTML = `
        <h2>${country.name}</h2>
        <img src="${country.flags}">
        <h2>Capital: ${country.capital.toString()}</h2>
        <h2>Population: ${country.population.toString()}</h2>
    `;
}

// Expose function as a global so inline handlers can call it from HTML
(window as any).fetchCountryDetails = fetchCountryDetails;

