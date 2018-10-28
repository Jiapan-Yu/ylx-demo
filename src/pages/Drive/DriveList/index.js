import React, { Component } from 'react'
import DriveItem from './DriveItem'
import { queryDriveList } from '../../../api/drive'

export default class DriveList extends Component {

	constructor(props) {
		super(props);
		this.state = { list: [] }
	}

	componentDidMount() {
		document.title = '自驾游'
		this.init()
	}

	init() {
		queryDriveList().then(object => {
			console.log(object)
			const { data } = object.data
			const { list } = data
			console.log(list)
			this.setState({list})
		})
	}

	render() {
		const { list } = this.state
		return (
			<div>
				{
					list.map(item => {
						return <DriveItem key={item.goodsDriveId} bean={item} />;
					})
				}
			</div>
		)
	}
}
