import React from 'react';
import './Keyboard.css';

export class KeyboardUnit extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			colors: {
				'OK': '#538D4E',
				'POS': '#B59F3B',
				'ERR': '#3A3A3C',
				'DEFAULT': '#818384',
			}
		};

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

		const backgroundColor = this.state.colors[this.props.status] || this.state.colors['DEFAULT'];
		
		return (
			<button className={className} style={{backgroundColor}} onClick={this.triggerKeyPress}>
				{this.props.letter}
			</button>
		);
	}
}