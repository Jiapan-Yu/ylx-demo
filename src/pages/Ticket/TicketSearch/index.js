import React from 'react'
import './index.less'
import SearchHeader from '../../../components/SearchHeader'

export default class TicketSearch extends React.Component {

	state = {
		data: localStorage.getItem('ticketHistory') ? localStorage.getItem('ticketHistory').split(',') : []
	}

	search = data => {
		if(!localStorage.getItem('ticketHistory')){
			localStorage.setItem('ticketHistory', data)
		}
		this.saveHistory(data)
		this.props.history.push('/ticket/list')
	}

	saveHistory(data) {
		let ticketHistory = localStorage.getItem('ticketHistory').split(',')
		if(ticketHistory.indexOf(data) > -1) {
			ticketHistory = ticketHistory.filter(item => item !== data).join(',')
		}
		if(ticketHistory) {
			localStorage.setItem('ticketHistory', `${data},${ticketHistory}`)
		} else {
			localStorage.setItem('ticketHistory', `${data}`)
		}
	}

	clearHistory = () => {
		localStorage.clear()
		this.setState({
			data: []
		})
	}

	render() {
		return (
			<div className="hot-search-wrap">
				<SearchHeader showCity={false} onChange={this.search} />

				<div className="content-wrap">
					<div className="head">热门搜索</div>
					<div className="locations">
            <button type="button">武汉花世界·花呆萌乐园</button>
						<button type="button">东湖游船</button>
						<button type="button">光谷步行街</button>
						<button type="button">户部巷</button>
						<button type="button">武汉胜天生态农庄</button>
						<button type="button">姚家山风景区</button>
						<button type="button">武汉东湖风景区</button>
						<button type="button">武汉东湖磨山景区</button>
					</div>

					<div className="history">
						<div className="head">历史搜索</div>
						<div className="head" onClick={this.clearHistory}>清除历史</div>
					</div>
					{
						this.state.data.length > 0 ? this.state.data.map((item, i) => (
							<button key={i}>{item}</button>
						)) :
							<div></div>
					}
				</div>
			</div>
		)
	}
}
