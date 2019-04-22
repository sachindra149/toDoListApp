import React, { Component } from 'react';
import CompletedListItems from './completedListItems.js';
import { connect } from 'react-redux';

import { addTaskAction } from '../actions/index.js';

class AddItemsToDoApp extends Component {

	constructor(props) {
		super(props);
		this.getToBeAddedValue = this.getToBeAddedValue.bind(this);
		this.state = {
			toBeAddedValue: ''
		}
	}

	getToBeAddedValue(e) {	
		this.setState({
			toBeAddedValue: e.target.value
		});
	}

	render() {
		return(
			<div className="col-6">
				<div className="row">
					<div className="col-12">
						<input type="text" className="col-9 form-control mb-3" placeholder="Add your todo item" onBlur={ this.getToBeAddedValue } />
						<button className="col-3 btn btn-primary" onClick={ () => this.props.addTaskAction(this.state.toBeAddedValue) }>Add Now</button>
					</div>
					<div className="col-12">
						<CompletedListItems />
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		addedItems: state
	}
}

export default connect(mapStateToProps, { addTaskAction })(AddItemsToDoApp);