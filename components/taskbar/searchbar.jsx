import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_task } from '../../actions/index.jsx';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.getToBeAddedValue = this.getToBeAddedValue.bind(this);
		this.state = {
			inputValueToBeAdded: ''
		}
	}

	getToBeAddedValue(e) {
		this.setState({
			inputValueToBeAdded: e.target.value
		});
		e.target.value = '';
	}

	render() {
		return(
			<div className="fullWidth searchBox">
				<input type="text" className="formControl" ref="task" placeholder="Add your todo item" onBlur={ this.getToBeAddedValue } />
				<button className="primaryButton" onClick={ () => this.props.addTask(this.state.inputValueToBeAdded) }>
					<span>&nbsp;</span>
				</button>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		addedItems: state
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addTask: value => {
			dispatch(add_task(value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);