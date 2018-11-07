import React from 'react';

export default class Currying extends React.Component {
	handleClick = (param) => (e) => {
		console.log('Event', e);
		console.log('Parameter: ', param);
	}
	render() {
		return (
			<button onClick={this.handleClick('meter')} >Clickable</button>
		)
	}
}
