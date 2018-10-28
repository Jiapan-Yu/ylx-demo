import React from 'react';

export default class App extends React.Component {
  constructor() {
		super();
		this.state = {
			arr: ["Item 1"]
		}
	}
	
	click = () => {
		this.setState({
			arr: ['Item ' + (this.state.arr.length+1)].concat(this.state.arr),
		})
	}

	render() {
		return (
			<div>
				<button onClick={this.click.bind(this)}>Add</button>
				<br />
				<br />
				<ul>
					{this.state.arr.map(
						(item, i) => <Item key={i} text={"Item" + i}>{item + " "}</Item>
					)}
				</ul>
			</div>
		);
	}
}

const Item = (props) => {
	return (
		<li>
			{console.log(props)}
			<label>{props.children}</label>
			<input value={props.text} />
		</li>
	);
}
