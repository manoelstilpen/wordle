import React from 'react';
import './BoardKey.css';

export class BoardKey extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: {
				'OK': '#538D4E',
				'POS': '#B59F3B',
				'ERR': '#3A3A3C',
				'DEFAULT': 'black'
			}
		};
	  }

	render() {
		const status = this.props.data?.status;

		const color = this.state.colors[status] ?? this.state.colors['DEFAULT'];

		const background = {
			backgroundColor: color
		};

		return (
			<div className='board-key' style={background}>
				{this.props.data?.key}
			</div>
		);
	}
}