import React from 'react';
import { KeyboardUnit } from './KeyboardUnit';
import './Keyboard.css';

export class Keyboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
			selected: []
		};
	}

	render() {
		return (
			<div className='keyboard-container'>
				<div className='keyboard-row'>
					<KeyboardUnit letter='Q' />
					<KeyboardUnit letter='W' />
					<KeyboardUnit letter='E' />
					<KeyboardUnit letter='R' />
					<KeyboardUnit letter='T' />
					<KeyboardUnit letter='Y' />
					<KeyboardUnit letter='U' />
					<KeyboardUnit letter='I' />
					<KeyboardUnit letter='O' />
					<KeyboardUnit letter='P' />
				</div>
				<div className='keyboard-row'>
					<div className='spacer'/>
					<KeyboardUnit letter='A' />
					<KeyboardUnit letter='S' />
					<KeyboardUnit letter='D' />
					<KeyboardUnit letter='F' />
					<KeyboardUnit letter='G' />
					<KeyboardUnit letter='H' />
					<KeyboardUnit letter='J' />
					<KeyboardUnit letter='K' />
					<KeyboardUnit letter='L' />
					<div className='spacer'/>
				</div>
				<div className='keyboard-row'>
					<KeyboardUnit letter='ENTER'/>
					<KeyboardUnit letter='Z' />
					<KeyboardUnit letter='X' />
					<KeyboardUnit letter='C' />
					<KeyboardUnit letter='V' />
					<KeyboardUnit letter='B' />
					<KeyboardUnit letter='N' />
					<KeyboardUnit letter='M' />
					<KeyboardUnit letter='BACK'/>
				</div>
			</div>
	);
}
}