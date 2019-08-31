import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remove_task, mark_complete } from '../../actions/index.jsx';

class TasksList extends Component {
	render() {
		let activeTasksList = Object.values(this.props.allItems).filter((item) =>
			item.completed === false
		);
		return (
			<div className="customWidth">
				<h3>&nbsp;</h3>
				<ul>
					{
						activeTasksList.length > 0 ? (
							activeTasksList.map((item) =>
								<li key={ item.id }>
									{ item.title }
									<a href="#" className="removeItem" title="Remove this task" onClick={ () => this.props.removeTask(item.id) }>&#x2717;</a>
									<a href="#" className="markItemComplete" title="Mark this task complete" onClick={ () => this.props.markTaskAsComplete(item.id) }>&#x2713;</a>
								</li>
							)
						) : <li>No tasks active.</li>
					}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		allItems: state
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removeTask: id => {
			dispatch(remove_task(id))
		},
		markTaskAsComplete: id => {
			dispatch(mark_complete(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);