import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import './index.less'

class SearchHeader extends Component {
	state = {
		ticketCity: localStorage.getItem('ticketCity') || '武汉'
	}

	handleChange = value => {
		this.props.onChange && this.props.onChange(value)
	}

	render() {
		const { ticketCity } = this.state
		const { showCity } = this.props
		return (
			<div className='components-search-header-wrap'>
				<div className="content">
					{
						showCity &&
						< div className="left" onClick={() => this.props.history.push('/ticket/city/ticketCity')}>
							<i className="iconfont">&#xe626;</i>&nbsp;{ticketCity}
						</div>
					}
					<div className="right">
						<SearchBar cancelText='搜索' onFocus={this.props.onFocus} onCancel={this.handleChange} className='input' placeholder='目的地/主题/关键字' />
					</div>
				</div>
			</div >
		)
	}
}
export default withRouter(SearchHeader)
SearchHeader.defaultProps = {
	showCity: true
}
