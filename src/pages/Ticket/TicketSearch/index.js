import React from 'react'
import './index.less'
import SearchHeader from '../../../components/SearchHeader'

export default class TicketSearch extends React.Component {

	search = () => {
		console.log("clicked search")
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
				</div>
			</div>
		)
	}
}
