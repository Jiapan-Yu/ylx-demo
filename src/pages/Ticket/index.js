import React, { Component } from 'react'
import { Icon, Toast } from 'antd-mobile'
import TicketItem from './TicketList/TicketItem'
import { queryTicketList } from '../../api/ticket'
import SearchHeader from '../../components/SearchHeader'
import './index.less'

export default class Ticket extends Component {
	state = {
		data_hot: [],
		data_speciality: []
	}

	componentDidMount() {
		document.title = '门票首页'
		Toast.loading('正在加载中...', 0)
		queryTicketList({
			searchInput: '欢乐',
			cityName: '武汉',
			reorder: 7
		}).then(res => {
			const { data } = res.data
			this.setState({
				data_hot: data
			})
		})
		queryTicketList({
			searchInput: '欢乐',
			cityName: '武汉',
			reorder: 8
		}).then(res => {
			const { data } = res.data
			this.setState({
				data_speciality: data
			})
			Toast.hide()
		})
	}

	componentWillMount() {
		Toast.hide()
	}

	more() {
		this.props.history.push('/ticket/list')
	}

	handleFocus = () => {
		this.props.history.push('/ticket/search')
		return
	}

	render() {
		const { data_hot, data_speciality } = this.state

		return (
			<div className="feature-item-wrap">
				<SearchHeader onChange={this.handleFocus}/>
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
					{
						data_hot.map(item => (
							<Hlist key={item.viewId} imgUrl={item.imgUrl} text={item.viewName} salePrice={item.salePrice} handleClick={() => this.props.history.push(`/ticket/detail/${item.viewId}`)}/>
						))
					}
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

				{
					data_speciality.map(item => (
						<TicketItem key={item.viewId} bean={item} handleClick={() => this.props.history.push(`/ticket/detail/${item.viewId}`)}/>
					))
				}
			</div>
		)
	}
}

const Hlist = (props) => {
	const { text, imgUrl, salePrice, handleClick } = props
	return (
		<div className="local-hot" onClick={() => handleClick && handleClick()}>
			<div className="img-container">
				<img src={imgUrl || require('../../images/banner/default.png')} alt="" />
			</div>

			<div className="description">
				<div className="text">
					{text}
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
