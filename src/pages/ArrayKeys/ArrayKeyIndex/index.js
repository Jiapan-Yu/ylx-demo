import React from 'react';
import './index.less';

const ToDo = props => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt.toTimeString()}</label>
    </td>
  </tr>
);

export default class ToDoListIndex extends React.Component {
  constructor() {
    super();
    const date = new Date();
    console.log(date);
    const todoCounter = 1;
    this.state = {
      todoCounter: todoCounter,
      list: [
        {
          id: todoCounter,
          createdAt: date,
        },
      ],
    };
  }

  sortByEarliest() {
    const sortedList = this.state.list.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  }

  sortByLatest() {
    const sortedList = this.state.list.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  }

  addToEnd() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [
      ...this.state.list,
      {id: nextId, createdAt: date},
    ];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  }

  addToStart() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [
      {id: nextId, createdAt: date},
      ...this.state.list,
    ];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  }

  handleKeyId() {
    this.props.history.push('/keyid');
  }

  render() {
    const description = "&lt;春节&gt;老挝北部丛林、金三角、清迈、拜县自驾9日游（驾车出国门、昆明集散、全程领队领航车护航、随行车护航等等等等"
		const shortDescription = description.length > 45 ? `${description.substring(0, 45)}...` : description
    return (
      <div>
        <code>key=index</code>
        <br />
        <button onClick={this.addToStart.bind(this)}>
          Add New to Start
        </button>
        <button onClick={this.addToEnd.bind(this)}>
          Add New to End
        </button>
        <button onClick={this.sortByEarliest.bind(this)}>
          Sort by Earliest
        </button>
        <button onClick={this.sortByLatest.bind(this)}>
          Sort by Latest
        </button>
        <button onClick={this.handleKeyId.bind(this)}>
          Handle key id
        </button>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th />
              <th>created at</th>
            </tr>
            {this.state.list.map((todo, index) => (
              <ToDo key={index} {...todo} />
            ))}
          </tbody>
        </table>

        {/* <div className="bottom-wrap">
					<div className="description" dangerouslySetInnerHTML={{__html: shortDescription}}>
					</div>

					<div className="location">						
						出发地：中国-云南-昆明
					</div>

					<div className="last-line">
						<div className="drive-days">							
							行程天数：9天
						</div>
						<div className="price-box">
							<span className="symbol">￥</span>
							<span className="price">13980</span>
							<span className="tag">起</span>
						</div>
					</div>
        </div> */}
        
        <div className="header">My Header Text</div>
      </div>
    );
  }
}
