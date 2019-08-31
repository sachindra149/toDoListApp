import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import toDoAppReducer from './reducers/index.jsx';

const store = createStore(toDoAppReducer, applyMiddleware(logger));

import ToDoAppComponents from './components/index.jsx';
import './styles/css.scss';

class ToDoApp extends Component {
	render() {
		return (
			<div className="container">
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