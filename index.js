import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './store.js';
import ToDoAppComponents from './components/index.js';

class ToDoApp extends Component {
	render() {
		return (
			<div className="container">
				<h1 className="text-center pb-5 py-5">App</h1>
				<ToDoAppComponents />
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={ store }>
		<ToDoApp />
	</Provider>, document.getElementById('toDoApp')
);