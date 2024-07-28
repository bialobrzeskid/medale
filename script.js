const countryData = [
    { name: "United States", flagUrl: "https://flagcdn.com/us.svg", gold: 39, silver: 41, bronze: 33 },
    { name: "China", flagUrl: "https://flagcdn.com/cn.svg", gold: 38, silver: 32, bronze: 18 },
    { name: "Japan", flagUrl: "https://flagcdn.com/jp.svg", gold: 27, silver: 14, bronze: 17 },
    // Add more countries as needed
];

document.addEventListener('DOMContentLoaded', function () {
    const olympicCircles = document.getElementById('olympic-circles');

    // Wait for the animation to finish before hiding the element
    setTimeout(() => {
        olympicCircles.style.opacity = 0;
        setTimeout(() => {
            olympicCircles.style.display = 'none';
        }, 1000); // matches the duration of the animation
    }, 2000); // Show for 2 seconds before starting the fade-out
});


function calculateTotalMedals(country) {
    return country.gold + country.silver + country.bronze;
}

function sortCountries(countries) {
    return countries.sort((a, b) => calculateTotalMedals(b) - calculateTotalMedals(a));
}

function createCountryCard(country) {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.innerHTML = `
        <img src="${country.flagUrl}" alt="${country.name} flag" class="country-flag">
        <div class="country-info">
            <h2 class="country-name">${country.name}</h2>
            <div class="medal-count">
                <div class="medal"><div class="medal-icon gold"></div>${country.gold}</div>
                <div class="medal"><div class="medal-icon silver"></div>${country.silver}</div>
                <div class="medal"><div class="medal-icon bronze"></div>${country.bronze}</div>
            </div>
        </div>
    `;
    return card;
}

function renderMedalList() {
    const medalList = document.getElementById('medal-list');
    const sortedCountries = sortCountries(countryData);

    sortedCountries.forEach(country => {
        const card = createCountryCard(country);
        medalList.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderMedalList);
