import React from 'react';
import { BoardKey } from './BoardKey';
import './Board.css';

class Board extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	} 

	render() {
		return (
			<div>
				<div className='board-container'>
					<div className='board-row'>
						<BoardKey data={this.props.game[0][0]}/>
						<BoardKey data={this.props.game[0][1]}/>
						<BoardKey data={this.props.game[0][2]}/>
						<BoardKey data={this.props.game[0][3]}/>
						<BoardKey data={this.props.game[0][4]}/>
					</div>
					<div className='board-row'>
						<BoardKey data={this.props.game[1][0]}/>
						<BoardKey data={this.props.game[1][1]}/>
						<BoardKey data={this.props.game[1][2]}/>
						<BoardKey data={this.props.game[1][3]}/>
						<BoardKey data={this.props.game[1][4]}/>
					</div>
					<div className='board-row'>
						<BoardKey data={this.props.game[2][0]}/>
						<BoardKey data={this.props.game[2][1]}/>
						<BoardKey data={this.props.game[2][2]}/>
						<BoardKey data={this.props.game[2][3]}/>
						<BoardKey data={this.props.game[2][4]}/>
					</div>
					<div className='board-row'>
						<BoardKey data={this.props.game[3][0]}/>
						<BoardKey data={this.props.game[3][1]}/>
						<BoardKey data={this.props.game[3][2]}/>
						<BoardKey data={this.props.game[3][3]}/>
						<BoardKey data={this.props.game[3][4]}/>
					</div>
					<div className='board-row'>
						<BoardKey data={this.props.game[4][0]}/>
						<BoardKey data={this.props.game[4][1]}/>
						<BoardKey data={this.props.game[4][2]}/>
						<BoardKey data={this.props.game[4][3]}/>
						<BoardKey data={this.props.game[4][4]}/>
					</div>
					<div className='board-row'>
						<BoardKey data={this.props.game[5][0]}/>
						<BoardKey data={this.props.game[5][1]}/>
						<BoardKey data={this.props.game[5][2]}/>
						<BoardKey data={this.props.game[5][3]}/>
						<BoardKey data={this.props.game[5][4]}/>
					</div>
				</div>

				<div>
					{this.props.isVictory && 
						(<div>
							<h3>You win! :)</h3>
						</div>)
					}

					{this.props.isDefeat && 
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