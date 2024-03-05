import { flagsData, score, lives, playGame } from './gameLogic';

const yourScore = document.getElementById('your-score');
const livesWrapper = document.getElementById('lives-wrapper');

const generateGameGrid = () => {
	if (content.innerHTML === `<h1>Game Over</h1>`) return;
	content.innerHTML = '';
	const flagContainer = document.createElement('div');
	flagContainer.setAttribute('id', 'flag-container');
	let countryNames = [];

	while (countryNames.length < 4) {
		let idx = Math.floor(Math.random() * flagsData.length);
		if (!countryNames.includes(flagsData[idx].country)) {
			countryNames.push(flagsData[idx].country);

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

	let guessIdx = Math.floor(Math.random() * countryNames.length);

	const guessCountry = document.createElement('h2');
	guessCountry.textContent = countryNames[guessIdx];
	let fGuess = guessCountry.textContent;
	content.append(flagContainer, guessCountry);

	const flagWrappers = document.querySelectorAll('.flag-wrapper');

	flagWrappers.forEach(el => {
		el.addEventListener('click', () => {
			flagWrappers.forEach(el => {
				el.classList.remove('flag-light');
				el.classList.add('disable-div');
			});

			const countryName = el.getAttribute('name');

			playGame(el, countryName, fGuess, yourScore, livesWrapper);
			setTimeout(generateGameGrid, 1000);
		});
	});
};

export { flagsData, score, lives, playGame, generateGameGrid };
