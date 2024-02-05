import React from 'react';
import { BoardKey } from './BoardKey';
import './Board.css';
import { Keyboard } from '../keyboard/Keyboard';

class Board extends React.Component {
	constructor(props) {
		super(props);

		const startGame = Array(6).fill([]);

		this.state = {
			game: startGame.map(() => Array(5).fill(null)),
			correctWord: this.props.word.toLowerCase(),
			activeKey: [0, 0]
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

		if (this.checkDefeat() || this.checkVictory()) {
			return;
		}

		const activeKey = this.state.activeKey;
		const pressedKey = event.key.toLowerCase();

		const isAlphabeticKey = /^[a-zA-Z]$/.test(pressedKey);

		if (!isAlphabeticKey) {
			if (pressedKey === 'backspace' && activeKey[1] > 0) {
				activeKey[1] = (activeKey[1] - 1);
				
				const gameAux = this.state.game.slice();
				gameAux[activeKey[0]][activeKey[1]] = null;

				this.setState({
					game: gameAux,
					activeKey
				});
			}

			return;
		}

		const gameAux = this.state.game.slice();
		gameAux[activeKey[0]][activeKey[1]] = event.key;

		activeKey[1] = (activeKey[1] + 1);

		if (activeKey[1] > 4) {
			activeKey[0] = (activeKey[0] + 1);
			activeKey[1] = 0;
		}

		this.setState({
			game: gameAux,
			activeKey
		});
	}

	checkDefeat() {
		const activeKey = this.state.activeKey;
		return activeKey[0] > 5;
	}

	checkVictory() {
		const correctWord = this.state.correctWord;
		const activeKey = this.state.activeKey;

		if (activeKey[0] <= 0 || activeKey[1] !== 0) {
			return;
		}

		const insertedWord = this.state.game[activeKey[0]-1].join('');

		return insertedWord === correctWord;
	}

	validateStatus(rowIndex, collIndex) {
		const insertedLetter = this.state.game[rowIndex][collIndex];

		if (this.state.activeKey[0] <= rowIndex || !insertedLetter) {
			return 'ERR';
		}

		const correctWord = this.state.correctWord;
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
		const isVictory = this.checkVictory();
		const isDefeat = this.checkDefeat();

		return (
			<div>
				Wordle

				<hr></hr>

				<div className='board-container'>
					<div className='board-row'>
						<BoardKey letter={this.state.game[0][0]} status={this.validateStatus(0, 0)}/>
						<BoardKey letter={this.state.game[0][1]} status={this.validateStatus(0, 1)}/>
						<BoardKey letter={this.state.game[0][2]} status={this.validateStatus(0, 2)}/>
						<BoardKey letter={this.state.game[0][3]} status={this.validateStatus(0, 3)}/>
						<BoardKey letter={this.state.game[0][4]} status={this.validateStatus(0, 4)}/>
					</div>
					<div className='board-row'>
						<BoardKey letter={this.state.game[1][0]} status={this.validateStatus(1, 0)}/>
						<BoardKey letter={this.state.game[1][1]} status={this.validateStatus(1, 1)}/>
						<BoardKey letter={this.state.game[1][2]} status={this.validateStatus(1, 2)}/>
						<BoardKey letter={this.state.game[1][3]} status={this.validateStatus(1, 3)}/>
						<BoardKey letter={this.state.game[1][4]} status={this.validateStatus(1, 4)}/>
					</div>
					<div className='board-row'>
						<BoardKey letter={this.state.game[2][0]} status={this.validateStatus(2, 0)}/>
						<BoardKey letter={this.state.game[2][1]} status={this.validateStatus(2, 1)}/>
						<BoardKey letter={this.state.game[2][2]} status={this.validateStatus(2, 2)}/>
						<BoardKey letter={this.state.game[2][3]} status={this.validateStatus(2, 3)}/>
						<BoardKey letter={this.state.game[2][4]} status={this.validateStatus(2, 4)}/>
					</div>
					<div className='board-row'>
						<BoardKey letter={this.state.game[3][0]} status={this.validateStatus(3, 0)}/>
						<BoardKey letter={this.state.game[3][1]} status={this.validateStatus(3, 1)}/>
						<BoardKey letter={this.state.game[3][2]} status={this.validateStatus(3, 2)}/>
						<BoardKey letter={this.state.game[3][3]} status={this.validateStatus(3, 3)}/>
						<BoardKey letter={this.state.game[3][4]} status={this.validateStatus(3, 4)}/>
					</div>
					<div className='board-row'>
						<BoardKey letter={this.state.game[4][0]} status={this.validateStatus(4, 0)}/>
						<BoardKey letter={this.state.game[4][1]} status={this.validateStatus(4, 1)}/>
						<BoardKey letter={this.state.game[4][2]} status={this.validateStatus(4, 2)}/>
						<BoardKey letter={this.state.game[4][3]} status={this.validateStatus(4, 3)}/>
						<BoardKey letter={this.state.game[4][4]} status={this.validateStatus(4, 4)}/>
					</div>
					<div className='board-row'>
						<BoardKey letter={this.state.game[5][0]} status={this.validateStatus(5, 0)}/>
						<BoardKey letter={this.state.game[5][1]} status={this.validateStatus(5, 1)}/>
						<BoardKey letter={this.state.game[5][2]} status={this.validateStatus(5, 2)}/>
						<BoardKey letter={this.state.game[5][3]} status={this.validateStatus(5, 3)}/>
						<BoardKey letter={this.state.game[5][4]} status={this.validateStatus(5, 4)}/>
					</div>
				</div>

				<div>
					{isVictory && 
						(<div>
							<h3>You win! :)</h3>
						</div>)
					}

					{isDefeat && 
						(<div>
							<h3>You lose! :(</h3>
						</div>)
					}
				</div>

			</div>			
		);
	}
}

export default Board;