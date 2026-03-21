const weatherIcon = document.querySelector('.weather-icon');

function updateWeatherIcon(condition) {
    if (condition === 'rainy') {
        weatherIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32">
                <circle cx="32" cy="32" r="14" fill="#8AC6FF"/>
                <line x1="32" y1="46" x2="32" y2="60" stroke="#0066CC" stroke-width="4"/>
            </svg>
        `;
    }
}

// Example:
updateWeatherIcon('rainy');