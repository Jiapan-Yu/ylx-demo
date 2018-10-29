import React, { Component } from 'react'
import TicketItem from './TicketItem'
import { queryTicketList } from '../../../api/ticket'

export default class TicketList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		document.title = '门票列表'
		queryTicketList().then(res => {
			const { data } = res.data
			this.setState({
				data
			})
		})
	}

	render() {
		const { data } = this.state
		return (
			<div>
				{
					data.map(item => (
						<TicketItem key={item.viewId} bean={item}/>
					))
				}
			</div>
		)
	}
}
