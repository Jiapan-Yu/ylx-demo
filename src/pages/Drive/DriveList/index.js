import React, { Component, Fragment } from 'react'
import DriveItem from './DriveItem'
import { ListView } from 'antd-mobile'
import { queryDriveList } from '../../../api/drive'
import Skeleton from '../../../components/Skeleton'

let pageIndex = 1
export default class DriveList extends Component {

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
		document.title = '自驾游'
		this.init()
	}

	init() {
		queryDriveList({
			pageNum: pageIndex
		}).then(res => {
			const { data } = res.data
			const { list } = data
			this.rData = list
			console.log(list)
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(list),
				isLoading: false,
				hasMore: list.length >= 10
			})
		})
	}

	onEndReached = (event) => {
		// load new data
		// hasMore: from backend data, indicates whether it is the last page, here is false
		if (this.state.isLoading || !this.state.hasMore) {
			return
		}
		pageIndex += 1
		console.log('reach end', event)
		this.setState({ isLoading: true })
		setTimeout(() => {
			queryDriveList({
				pageNum: pageIndex
			}).then(res => {
				const { data } = res.data
				const { list } = data
				this.rData = [...this.rData, ...list]
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(this.rData),
					isLoading: false,
					hasMore: list.length >= 10
				})
			})
		}, 1000)
	}

	render() {
		const { dataSource, isLoading, hasMore } = this.state
		return (
			<div>
				<ListView
					dataSource = {dataSource}
					renderFooter={() => (<div style={{ textAlign: 'center' }}>
						{
							hasMore ?
								(isLoading ?
									<Fragment>
										<Skeleton />
										<Skeleton />
										<Skeleton />
									</Fragment>
									: '上拉加载')
								: '- end -'
						}
					</div>)}
					renderRow = {(rowData, sectionID, rowID) => (
						<DriveItem key={rowID} bean={rowData} />
					)}
					useBodyScroll = {true}
					onEndReached = {this.onEndReached}
					pageSize = {10}
				/>
			</div>
		)
	}
}
