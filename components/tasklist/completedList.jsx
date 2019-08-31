import React, { Component } from 'react';
import { connect } from 'react-redux';

class CompletedList extends Component {
	render() {
		let completedList = Object.values(this.props.items).filter( (item) =>
			item.completed === true
		);
		return (
			<div className="customWidth pullLeft">
				<h3>Completed Tasks</h3>
				<ul>
					{
						completedList.length > 0 ? completedList.map((item) =>
							<li key={ item.id }>{ item.title }</li>
						) : <li>No completed items to display yet.</li>
					}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		items: state
	}
}

export default connect(mapStateToProps)(CompletedList);