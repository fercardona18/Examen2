const apiKey = '953d3a1fff0d819584e8ab94f5fe1698';

document.getElementById('search').addEventListener('click', getWeather);

async function getWeather() {
    const cityInput = document.getElementById('city');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    const city = cityInput.value;

    if (city === '') {
        alert('Por favor, ingrese una ciudad');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            temperature.textContent = data.main.temp;
            description.textContent = data.weather[0].description;
        } else {
            alert('No se pudo encontrar el clima para la ciudad ingresada.');
        }
    } catch (error) {
        console.error('Error al obtener datos del clima:', error);
        alert('Hubo un error al obtener datos del clima.');
    }
}
