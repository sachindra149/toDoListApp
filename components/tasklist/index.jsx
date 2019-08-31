import React, { Component } from 'react';
import CompletedList from './completedList.jsx';
import TasksList from './tasksList.jsx';

class TaskList extends Component {
	render() {
		return (
			<React.Fragment>
				<TasksList />
				<CompletedList />
			</React.Fragment>
		)
	}
}

export default TaskList;