import data from '../data/country-flag.json';
import './style.css';
// import Wall from '../images/world-wall.png';
import Heart from '../icons/heart.svg';

const content = document.getElementById('content');
const flagContainer = document.getElementById('flag-container');
const livesWrapper = document.getElementById('lives-wrapper');
const lives = document.getElementById('lives');

let countryNames = [];
let score = 0;
let livesNum = 3;

const yourScore = document.getElementById('your-score');

while (countryNames.length < 4) {
	let idx = Math.floor(Math.random() * (data.length + 1));
	if (!countryNames.includes(data[idx].country)) {
		countryNames.push(data[idx].country);

		const flagWrapper = document.createElement('div');
		flagWrapper.classList.add('flag-wrapper', 'flag-light');
		flagWrapper.setAttribute('name', `${data[idx].country}`);

		const flag = new Image();
		flag.src = data[idx].flag;
		flag.classList.add('flag');

		flagWrapper.appendChild(flag);
		flagContainer.appendChild(flagWrapper);
	}
}

for (let i = 0; i < 3; i++) {
	const heartIcon = new Image();
	heartIcon.src = Heart;
	livesWrapper.appendChild(heartIcon);
}

const flagWrappers = document.querySelectorAll('.flag-wrapper');

let guessIdx = Math.floor(Math.random() * countryNames.length);

const guessCountry = document.createElement('h2');
guessCountry.textContent = countryNames[guessIdx];
content.appendChild(guessCountry);

flagWrappers.forEach(el => {
	el.addEventListener('click', () => {
		flagWrappers.forEach(el => {
			el.classList.remove('flag-light');
			el.classList.add('disable-div');
		});
		const countryName = el.getAttribute('name');
		if (countryName === guessCountry.textContent) {
			el.classList.add('correct-answer');
			score++;
			yourScore.textContent = `Your Score: ${score}`;
		} else {
			el.classList.add('wrong-answer');
			livesWrapper.removeChild(livesWrapper.lastChild);
			livesNum--;
		}
	});
});
