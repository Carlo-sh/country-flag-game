import './style.css';
import Heart from '../icons/heart.svg';
import { flagsData, playGame, generateGameGrid } from './generate';

const content = document.getElementById('content');
const flagContainer = document.getElementById('flag-container');
const livesWrapper = document.getElementById('lives-wrapper');
const yourScore = document.getElementById('your-score');

(function () {
	for (let i = 0; i < 3; i++) {
		const heartIcon = new Image();
		heartIcon.src = Heart;
		livesWrapper.appendChild(heartIcon);
	}

	let cNames = [];
	let cIndexes = [];

	while (cNames.length < 4) {
		let idx = Math.floor(Math.random() * flagsData.length);
		if (!cNames.includes(flagsData[idx].country)) {
			cNames.push(flagsData[idx].country);
			cIndexes.push(idx);

			const flagWrapper = document.createElement('div');
			flagWrapper.classList.add('flag-wrapper', 'flag-light');
			flagWrapper.setAttribute('name', `${flagsData[idx].country}`);

			const flag = new Image();
			flag.src = flagsData[idx].flag;
			flag.classList.add('flag');

			flagWrapper.appendChild(flag);
			flagContainer.appendChild(flagWrapper);
		}
	}

	let guessIdx = Math.floor(Math.random() * cNames.length);

	const guessCountry = document.createElement('h2');
	guessCountry.textContent = cNames[guessIdx];
	let guess = guessCountry.textContent;
	content.append(flagContainer, guessCountry);

	const flagWrappers = document.querySelectorAll('.flag-wrapper');

	flagWrappers.forEach(el => {
		el.addEventListener('click', () => {
			flagWrappers.forEach(el => {
				el.classList.remove('flag-light');
				el.classList.add('disable-div');
			});
			const cName = el.getAttribute('name');
			playGame(el, cNames, cIndexes, cName, guess, yourScore, livesWrapper);
			setTimeout(generateGameGrid, 1000);
		});
	});
})();
