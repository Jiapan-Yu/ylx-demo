import React from 'react'
import RouteMoreItem from './RouteMoreItem'
import { getRoute } from '../../../api/route'

export default class RouteMoreList extends React.Component {

	constructor(props) {
		super(props)
		this.state = { pageList: [] }
	}

	componentDidMount() {
		getRoute({
			pageNum: 1,
			type: '1',
			startCity: '武汉'
		}).then(res => {
			const { data } = res.data
			this.setState({ pageList: data.pageList })
		})
	}

	render() {
		const { pageList } = this.state
		return (
			<div>
				{
					pageList.map(item => <RouteMoreItem key={item.goodsRouteId} bean={item} />)
				}
			</div>
		)
	}
}
