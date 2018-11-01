import React, { Component } from 'react'
import './index.less'

class TicketItem extends Component {

	render() {
		const { imgUrl, viewName, pageViews, saleVolume, provinceName, cityName, salePrice } = this.props.bean
		return (
			<div className="local-speciality-wrap">
				<div>
					<img src={imgUrl || require('../../../../images/banner/default.png')} alt="" />
				</div>
				<div className="main">
					<div className="title">{viewName}</div>
					<div className="description">						
						<div className="view-count">浏览{pageViews}次</div>
						<div className="sell-count">已售{saleVolume}份</div>
						<div className="location">{provinceName} {cityName}</div>
					</div>
					<div className="price-box">
						<span className="symbol">￥</span>
						<span className="price">{salePrice}</span>
						<span className="tag">起</span>
					</div>
				</div>
			</div>
		)
	}
}

export default TicketItem
