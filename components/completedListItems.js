import React, { Component } from 'react';
import { connect } from 'react-redux';

class CompletedListItems extends Component {
	render() {

		let completedList = Object.values(this.props.completedList).filter( (item) => item.completed == true );
		
		return (
			<div className="row">
				<div className="col-9 py-5">
					<h3 className="pb-2">Completed List Items</h3>
					<ul>
						{
							completedList && completedList.length > 0 ? 
							completedList.map( (item) => <li key={ item.id }>{ item.title }</li> )
							: <li>No completed Items yet</li>
						}
					</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		completedList: state
	}
}

export default connect(mapStateToProps)(CompletedListItems);