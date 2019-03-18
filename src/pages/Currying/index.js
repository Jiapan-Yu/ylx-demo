import React from 'react'; // eslint-disable-line
import Header from './header';
import Content from './content';
import Footer from './footer'

export default class Currying extends React.Component {
	handleClick = (param) => (e) => {
		console.log('Event', e); // eslint-disable-line no-console
		console.log('Parameter: ', param); // eslint-disable-line no-console
	}
	render() {
		return (
			<div>
				<Header title="Welcome to Codejobs" />
				
				<Content>
					<button onClick={this.handleClick('meter')} >Clickable</button>
				</Content>
				<Footer />
			</div>
		)
	}
}
