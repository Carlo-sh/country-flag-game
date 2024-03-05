import data from '../data/country-flag.json';

const flagsData = JSON.parse(JSON.stringify(data));

let score = 0;
let lives = 3;

const playGame = (item, cName, guess, ySc, lWr) => {
	if (cName === guess) {
		item.classList.add('correct-answer');
		score++;
		ySc.textContent = `Your Score: ${score}`;
	} else {
		item.classList.add('wrong-answer');
		lWr.removeChild(lWr.lastChild);
		lives--;
		if (lives === 0) {
			content.innerHTML = `<h1>Game Over</h1>`;
		}
	}
	const delCountry = flagsData.splice(flagsData.indexOf(flagsData.cName));
};

export { flagsData, score, lives, playGame };