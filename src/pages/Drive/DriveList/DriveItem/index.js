import React, { Component } from 'react'
import './index.less'

export default class DriveItem extends Component {
	constructor(props) {
		super(props)
		this.state = { imgUrl: this.props.bean.mainImgUrl }
	}

	render() {
		const { imgUrl } = this.state
		const { destinationName, goodsName, collectivelyName, daytimeCount, price } = this.props.bean
		const shortDescription = goodsName.length > 45 ? `${goodsName.substring(0, 45)}...` : goodsName
		return (
			<div className="drive-item-wrap">
				<div className="img-container">
					<img src={imgUrl || require('../../../../images/banner/default.png')} alt="" onError={() => this.setState({ imgUrl: require('../../../../images/banner/default.png')})} />
					<div className="spot-location"><span>{destinationName}</span></div>
				</div>

				<div className="bottom-wrap">
					<div className="description" dangerouslySetInnerHTML={{__html: shortDescription}}>
					</div>

					<div className="location">												
						出发地：{collectivelyName}
					</div>

					<div className="last-line">
						<div className="drive-days">							
							行程天数：{daytimeCount || 0}天
						</div>
						<div className="price-box">
							<span className="symbol">￥</span>
							<span className="price">{price || 0}</span>
							<span className="tag">起</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
