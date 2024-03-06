import data from '../data/country-flag.json';

const flagsData = JSON.parse(JSON.stringify(data));

let score = 0;
let lives = 3;
const garbage = [];

const playGame = (item, cNames, cIndexes, cName, guess, ySc, lWr) => {
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

	garbage.push(
		flagsData.splice(
			flagsData.indexOf(flagsData[cIndexes[cNames.indexOf(cName)]]),
			1,
		),
	);
};

export { flagsData, score, lives, garbage, playGame };
