import React from 'react';
import { Keyboard } from '../keyboard/Keyboard';
import Board from '../board/Board';
import './Game.css';

export class Game extends React.Component {
	constructor() {
		super();

		this.state = {
			game: Array(6).fill([]).map(() => Array(5).fill(null)),
			activeKey: [0, 0],
			victory: false,
			defeat: false
		};

		this.handleKey = this.handleKey.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKey);
	}
	
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKey);
	}

	handleKey(event) {
		if (this.state.victory || this.state.defeat) {
			return;
		}

		const activeKey = this.state.activeKey;
		const pressedKey = event.key.toLowerCase();

		const isAlphabeticKey = /^[a-zA-Z]$/.test(pressedKey);

		if (isAlphabeticKey) {
			if (activeKey[1] >= 5) {
				return;
			}
	
			const gameAux = this.state.game.slice();
			gameAux[activeKey[0]][activeKey[1]] = { key: pressedKey, status: 'PENDING' };
	
			activeKey[1] = (activeKey[1] + 1);
	
			this.setState({
				game: gameAux,
				activeKey
			});
		}

		if (pressedKey === 'backspace' && activeKey[1] > 0) {
			activeKey[1] = (activeKey[1] - 1);
			
			const gameAux = this.state.game.slice();
			gameAux[activeKey[0]][activeKey[1]] = null;

			this.setState({
				game: gameAux,
				activeKey
			});
		}

		if (pressedKey === 'enter' && activeKey[0] >= 0 && activeKey[1] >= 5) {
			// validates defeat and victory
			if (this.checkDefeat()) {
				this.setState({defeat: true});
			}
	
			if (this.checkVictory()) {
				this.setState({victory: true});
			}

			// go to the next line
			activeKey[0] = (activeKey[0] + 1);
			activeKey[1] = 0;

			// validates line's correctness
			const gameAux = this.state.game.slice();
			gameAux.forEach((row, rowIndex) => {
				row.forEach((gamePosState, collIndex) => {
					if (gamePosState === null || gamePosState.status !== 'PENDING') {
						return;
					}

					gamePosState.status = this.validateStatus(rowIndex, collIndex);
				});
			});

			this.setState({game: gameAux, activeKey});
		}

	}

	mergeGameLine(lineIndex) {
		return this.state.game[lineIndex].reduce((acc, curr) => acc + curr.key, '');
	}

	checkDefeat() {
		const activeKey = this.state.activeKey;

		if (activeKey[0] < 5) {
			return;
		}

		const correctWord = this.props.word;
		const insertedWord = this.mergeGameLine(activeKey[0]);
		
		return insertedWord !== correctWord;
	}

	checkVictory() {
		const activeKey = this.state.activeKey;

		if (activeKey[1] !== 5) {
			return;
		}

		const correctWord = this.props.word;
		const insertedWord = this.mergeGameLine(activeKey[0]);

		return insertedWord === correctWord;
	}

	validateStatus(rowIndex, collIndex) {
		const currPos = this.state.game[rowIndex][collIndex];

		if (this.state.activeKey[0] <= rowIndex || !currPos) {
			return 'ERR';
		}

		const insertedLetter = currPos.key;

		const correctWord = this.props.word;
		const correctLetter = correctWord[collIndex];

		if (correctLetter === insertedLetter) {
			return 'OK';
		}

		if (correctWord.includes(insertedLetter)) {
			return 'POS';
		}

		return 'ERR';
	}

	render() {
		return (
			<div className="App-game">
				<div className='header'>
					<header className="App-header">
						Wordle
					</header>

					<hr></hr>
				</div>
	
				<div className='App-board'>
				  <Board game={this.state.game} 
				  		isVictory={this.state.victory}
						isDefeat={this.state.defeat}
					/>
				</div>
	
				<div className='App-keyboard'>
				  <Keyboard game={this.state.game}/>
				</div>
			</div>
		);
	}
}

export default Game;