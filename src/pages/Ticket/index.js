import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import TicketItem from './TicketList/TicketItem'
import './index.less'

export default class Ticket extends Component {

	more() {
		console.log(this.props)
		this.props.history.push('/ticket/list')
	}

	render() {
		return (
			<div className="feature-item-wrap">
				<div className="local-hot-head">
					<div className='title-left'></div>
					<div className='title-head'>
						<span className="left"></span>
							本地人气
						<span className="right"></span>
					</div>
					<div className="more">
						<span onClick={this.more.bind(this)}>更多</span>
						<Icon type='right' />
					</div>
				</div>

				<div className="local-hot-wrap">
					<Hlist text="武汉花世界·花的世界"/>
					<Hlist text="14725836954651321"/>
					<Hlist text="14725836"/>
					<Hlist />
					<Hlist />
					<Hlist />
					<Hlist />
					<Hlist />
					<Hlist />
					<Hlist />
				</div>

				<div className="local-speciality-head">
					<div className='title-left'></div>
					<div className='title-head'>
						<span className="left"></span>
						本地精选
						<span className="right"></span>
					</div>
					<div className="more">
						<span onClick={this.more.bind(this)}>更多</span>
						<Icon type='right' />
					</div>
				</div>

				<TicketItem />
				<TicketItem  />
				<TicketItem />
				<TicketItem />
				<TicketItem />
				<TicketItem />
				<TicketItem />
			</div>
		)
	}
}

const Hlist = (props) => {
	console.log(props)
	const { text } = props
	return (
		<div className="local-hot">
			<div className="img-container">
				<img src={require('../../images/banner/default.png')} alt="" />
			</div>

			<div className="description">
				<div className="text">
					{text}
				</div>
				<div className="price-box">
					<span className="symbol">￥</span>
					<span className="price">51</span>
					<span className="tag">起</span>
				</div>
			</div>
		</div>
	)
}