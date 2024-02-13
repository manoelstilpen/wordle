import React from 'react';
import './Keyboard.css';

export class KeyboardUnit extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.triggerKeyPress = this.triggerKeyPress.bind(this);
	}

	triggerKeyPress() {
		if (this.props.letter === 'BACK') {
			document.dispatchEvent(new KeyboardEvent('keydown', {
				key: 'Backspace',
			}));

			return;
		}

		if (this.props.letter === 'ENTER') {
			document.dispatchEvent(new KeyboardEvent('keydown', {
				key: 'Enter',
			}));

			return;
		}

		document.dispatchEvent(new KeyboardEvent('keydown', {
			key: this.props.letter.toLowerCase(),
		}));
	}

	render() {
		let className = 'keyboard-button';

		if (this.props.letter === 'BACK' || this.props.letter === 'ENTER') {
			className += ' keyboard-button-special';
		}

		return (
			<button className={className} onClick={this.triggerKeyPress}>
				{this.props.letter}
			</button>
		);
	}
}