import React, { Component, Fragment } from 'react'
import TicketItem from './TicketItem'
import { ListView } from 'antd-mobile'
import { queryTicketList } from '../../../api/ticket'
import Skeleton from '../../../components/Skeleton'

let pageIndex = 1
export default class TicketList extends Component {
	constructor(props) {
		super(props)
		const dataSource = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2
		})
		this.state = {
			dataSource,
			isLoading: true,
			hasMore: true
		}
	}

	componentDidMount() {
		document.title = '门票列表'
		this.init()
	}

	init() {
		queryTicketList({
			pageNum: pageIndex,
			cityName: '武汉'
		}).then(res => {
			const { data } = res.data
			console.log(data)
			this.rData = data
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(data),
				isLoading: false,
				hasMore: data.length >= 10
			})
		})
	}

	onEndReached = (event) => {
		// load new data
		// hasMore: from backend data, indicates whether it is the last page,
		// here is false
		if (this.state.isLoading || !this.state.hasMore) {
			return
		}
		pageIndex += 1
		this.setState({ isLoading: true })
		setTimeout(() => {
			queryTicketList({
				pageNum: pageIndex
			}).then(res => {
				const { data } = res.data
				this.rData = [...this.rData, ...data]
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(this.rData),
					isLoading: false,
					hasMore: data.length >= 10
				})
			})
		}, 1000)
	}

	render() {
		const { dataSource, isLoading, hasMore } = this.state
		return (
			<div>
				<ListView
					dataSource={dataSource}
					renderFooter={() => (<div style={{ textAlign: 'center' }}>
						{
							hasMore ?
								(isLoading ?
									<Fragment>
										<Skeleton />
										<Skeleton />
										<Skeleton />
									</Fragment>
									: '上拉加载 ')
								: '- end -'
						}
					</div>)}
					renderRow = {(rowData, sectionID, rowID) => (
						<TicketItem key={rowID} bean={rowData} />
					)}
					useBodyScroll = {true}
					onEndReached = {this.onEndReached}
					pageSize = {10}
				/>
			</div>
		)
	}
}
