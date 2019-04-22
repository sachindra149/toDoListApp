import React, { Component } from 'react';
import { connect } from 'react-redux';

import { markTaskAsComplete, deleteTaskAction } from '../actions/index.js';

class ShowToDoAppListing extends Component {
	render() {

		let tasksList = Object.values(this.props.itemsDisplay);
		let incompleteTasksList = tasksList.filter( (item) =>
			item.completed === false
		);

		return(
			<div className="col-6">
				<ul>
					{
						incompleteTasksList && incompleteTasksList.length > 0 ? incompleteTasksList.map( (item) => 
							<li key={ item.id }>
								{ item.title }
								<a href="javascript:void(0);" className="removeItem" title="Remove this item" onClick={ () => this.props.deleteTaskAction(item.id) }>&#x2717;</a>
								<a href="javascript:void(0);" className="markItemComplete" title="Mark this item complete" onClick={ () => this.props.markTaskAsComplete(item.id) }>&#x2713;</a>
							</li>
						) : <li>No items to display</li>
					}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		itemsDisplay: state
	}
}

export default connect(mapStateToProps, { markTaskAsComplete, deleteTaskAction })(ShowToDoAppListing);