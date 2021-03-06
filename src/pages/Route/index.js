import React, { Component, Fragment } from 'react'
import { Icon, Tabs } from 'antd-mobile'
import RouteMoreItem from './RouteMoreList/RouteMoreItem'
import { getRoute } from '../../api/route'
import Skeleton from '../../components/Skeleton'
import sanya from '../../images/route/sanya.jpg'
import lijiang from '../../images/route/lijiang.jpg'
import xiamen from '../../images/route/xiamen.jpg'
import './index.less'

const chinaHotCity = ['三亚', '丽江', '厦门']
const img = [sanya, lijiang, xiamen]

const imgData = []

for (let i = 0; i < chinaHotCity.length; i++) {
	imgData.push({
		location: chinaHotCity[i],
		imgUrl: img[i]
	})
}

const tabs = [
	{ title: <div>周边游</div> },
	{ title: <div>国内游</div> },
	{ title: <div>境外游</div> }
]

export default class RouteHome extends Component {
	state = {
		dataSource: [],
		isLoading: true
	}

	componentDidMount() {
		document.title = '线路'

		this.init(1)
	}

	init = (type) => {
		this.setState({ isLoading: true })
		getRoute({
			pageNum: 1,
			type: type,
			startCity: type === 1 ? '武汉' : ''
		}).then(res => {
			const { data } = res.data
			this.setState({
				isLoading: false,
				dataSource: data.pageList
			})
		})
	}

	more() {
		this.props.history.push('/route/more')
	}

	render() {
		const { dataSource, isLoading } = this.state
		return (
			<div className="route-wrap">
				<div className="local-hot-head">
					<div className='title-left'></div>
					<div className='title-head'>
						<span className="left"></span>
						热门城市
						<span className="right"></span>
					</div>
					<div className="more">
						<span onClick={this.more.bind(this)}>更多</span>
						<Icon type='right' />
					</div>
				</div>

				<div className="local-hot-wrap">
					{
						imgData.map((item, i) => {
							return <Hlist key={i} imgUrl={item.imgUrl} location={item.location} />
						})
					}
				</div>

				<Tabs tabs={tabs}
					initalPage={1}
					onChange={(tab, index) => { this.init(index + 1); }}
					onTabClick={(tab, index) => { this.init(index + 1); }}
				>
					{
						isLoading ?
							<Fragment>
								<Skeleton />
								<Skeleton />
								<Skeleton />
							</Fragment>
							:
							<div>
								{
									dataSource.map(item => <RouteMoreItem key={item.goodsRouteId} bean={item} onClick={() => this.props.history.push('/route/more')} />)
								}
							</div>
					}

				</Tabs>
			</div>
		)
	}
}

const Hlist = (props) => {
	const { imgUrl, location } = props
	return (
		<div className="local-hot">
			<div className="img-container">
				<img src={imgUrl} alt="" />
			</div>
			<div className="location">
				{location}
			</div>
		</div>
	)
}
