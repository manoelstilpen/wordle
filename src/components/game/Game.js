import React from 'react';
import { Keyboard } from '../keyboard/Keyboard';
import Board from '../board/Board';
import './Game.css';

export class Game extends React.Component {
	constructor(props) {
		super(props);
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
				  <Board word={this.props.word}/>
				</div>
	
				<div className='App-keyboard'>
				  <Keyboard/>
				</div>
			</div>
		);
	}
}

export default Game;