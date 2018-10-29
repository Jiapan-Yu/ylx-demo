import React, { Component } from 'react'
import './index.less'

class TicketItem extends Component {

	render() {
		return (
			<div className="local-speciality-wrap">
				<div>
					<img src={require('../../../../images/banner/default.png')} alt="" />
				</div>
				<div className="description">
					<div className="title">武汉花世界·花呆萌乐园</div>
					<div className="view-count">浏览9972次</div>
					<div className="sell-count">已售9262份</div>
					<div className="location">湖北 武汉</div>
				</div>
				<div className="price-box">
					<span className="symbol">￥</span>
					<span className="price">51</span>
					<span className="tag">起</span>
				</div>
			</div>
		)
	}
}

export default TicketItem