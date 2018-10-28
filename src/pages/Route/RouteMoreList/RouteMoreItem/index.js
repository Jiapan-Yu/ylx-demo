import React, { Component } from 'react'
import './index.less'

class RouteMoreItem extends Component {

	render() {
		const { firstClassBrandName, goodsName, routeMainImg, routePrice } = this.props.bean
		const text = '&lt;长沙-张家界森林公园-天门山玻璃栈道4日游&gt;武汉火车往返，游武汉武汉武汉'
		const shortText = goodsName.length > 32 ? `${goodsName.substring(0, 32)}...` : goodsName
		return (
			<div className="travel-wrap">
				<div>
					<img src={routeMainImg || require('../../../../images/banner/default.png')} alt="" />
				</div>
				<div className="description">
					<div className="title">{firstClassBrandName}</div>
					<div className="detail" dangerouslySetInnerHTML={{ __html: shortText}} ></div>
					<span className="symbol">￥</span>
					<span className="price">{routePrice}</span>
					<span className="tag">起</span>
				</div>
			</div>
		)
	}
}
export default RouteMoreItem
