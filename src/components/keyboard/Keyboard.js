import React from 'react';
import { KeyboardUnit } from './KeyboardUnit';
import './Keyboard.css';

export class Keyboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		const keyMapping = {};
		const game = this.props.game;

		game.forEach((row) => {
			row.forEach((gamePos) => {
				if (gamePos === null || gamePos.status === 'PENDING') {
					return;
				}

				keyMapping[gamePos.key.toUpperCase()] = gamePos.status;
			});
		});

		return (
			<div>
				<div className='keyboard-row'>
					<KeyboardUnit letter='Q' status={keyMapping['Q']}/>
					<KeyboardUnit letter='W' status={keyMapping['W']}/>
					<KeyboardUnit letter='E' status={keyMapping['E']}/>
					<KeyboardUnit letter='R' status={keyMapping['R']}/>
					<KeyboardUnit letter='T' status={keyMapping['T']}/>
					<KeyboardUnit letter='Y' status={keyMapping['Y']}/>
					<KeyboardUnit letter='U' status={keyMapping['U']}/>
					<KeyboardUnit letter='I' status={keyMapping['I']}/>
					<KeyboardUnit letter='O' status={keyMapping['O']}/>
					<KeyboardUnit letter='P' status={keyMapping['P']}/>
				</div>
				<div className='keyboard-row'>
					<div className='spacer'/>
					<KeyboardUnit letter='A' status={keyMapping['A']}/>
					<KeyboardUnit letter='S' status={keyMapping['S']}/>
					<KeyboardUnit letter='D' status={keyMapping['D']}/>
					<KeyboardUnit letter='F' status={keyMapping['F']}/>
					<KeyboardUnit letter='G' status={keyMapping['G']}/>
					<KeyboardUnit letter='H' status={keyMapping['H']}/>
					<KeyboardUnit letter='J' status={keyMapping['J']}/>
					<KeyboardUnit letter='K' status={keyMapping['K']}/>
					<KeyboardUnit letter='L' status={keyMapping['L']}/>
					<div className='spacer'/>
				</div>
				<div className='keyboard-row'>
					<KeyboardUnit letter='ENTER'/>
					<KeyboardUnit letter='Z' status={keyMapping['Z']} />
					<KeyboardUnit letter='X' status={keyMapping['X']} />
					<KeyboardUnit letter='C' status={keyMapping['C']} />
					<KeyboardUnit letter='V' status={keyMapping['V']} />
					<KeyboardUnit letter='B' status={keyMapping['B']} />
					<KeyboardUnit letter='N' status={keyMapping['N']} />
					<KeyboardUnit letter='M' status={keyMapping['M']} />
					<KeyboardUnit letter='BACK'/>
				</div>
			</div>
	);
}
}