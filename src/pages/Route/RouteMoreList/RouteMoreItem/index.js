import React, { Component } from 'react'
import './index.less'

class RouteMoreItem extends Component {

	render() {
		const { firstClassBrandName, goodsName, routeMainImg, routePrice } = this.props.bean
		return (
			<div className="travel-wrap" onClick={this.props.onClick}>
				<div>
					<img src={routeMainImg || require('../../../../images/banner/default.png')} alt="" />
				</div>
				<div className="description">
					<div className="title">{firstClassBrandName}</div>
					<div className="detail" dangerouslySetInnerHTML={{ __html: goodsName}} ></div>
					<span className="symbol">￥</span>
					<span className="price">{routePrice}</span>
					<span className="tag">起</span>
				</div>
			</div>
		)
	}
}
export default RouteMoreItem
