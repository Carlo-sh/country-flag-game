import data from '../data/country-flag.json';
import './style.css';

const content = document.getElementById('content');
const flagContainer = document.getElementById('flag-container');

let countryNames = [];

while (countryNames.length < 4) {
	let idx = Math.floor(Math.random() * (data.length + 1));
	if (!countryNames.includes(data[idx].country)) {
		countryNames.push(data[idx].country);

		const flagWrapper = document.createElement('div');
		flagWrapper.classList.add('flag-wrapper');

		const flag = new Image();
		flag.src = data[idx].flag;
		flag.classList.add('flag');

		flagWrapper.appendChild(flag);
		flagContainer.appendChild(flagWrapper);
	}
}

let guessIdx = Math.floor(Math.random() * countryNames.length);

const guessCountry = document.createElement('h2');
guessCountry.textContent = countryNames[guessIdx];
content.appendChild(guessCountry);

console.log(countryNames);
