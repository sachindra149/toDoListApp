import React, { Component } from 'react';

import AddItemsToDoApp from './addToList.js';
import ShowToDoAppListing from './showList.js';

class ToDoAppComponents extends Component {
	render() {
		return(
			<div className="row">
				<AddItemsToDoApp />
				<ShowToDoAppListing />
			</div>
		)
	}
}

export default ToDoAppComponents;
