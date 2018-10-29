import React, { Component } from 'react'
import './index.less'

export default class Skeleton extends Component {
	render() {
		return (
			<div className='skeleton-wrap'>
				<div className='skeleton-head'></div>
				<div className='skeleton-body'>
					<div className='skeleton-title'></div>
					<div className='skeleton-content'></div>
				</div>
			</div>
		)
	}
}
