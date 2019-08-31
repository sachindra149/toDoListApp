import React, { Component } from 'react';
import Header from './header/index.jsx';
import SearchBar from './taskbar/searchbar.jsx';
import StatusBar from './statusBar/index.jsx';
import TaskList from './tasklist/index.jsx';

class ToDoAppComponents extends Component {
	render() {
		return(
			<React.Fragment>
				<Header />
				<SearchBar />
				<StatusBar />
				<div className="fullWidth">
					<TaskList />
				</div>
			</React.Fragment>
		)
	}
}

export default ToDoAppComponents;

