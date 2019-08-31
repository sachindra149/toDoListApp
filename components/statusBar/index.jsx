import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatusBar extends Component {
	render() {
		let totalTasks = Object.values(this.props.listItems).length;
		let tasksCompleted = Object.values(this.props.listItems).filter((item) => item.completed === true).length;
		let ObjStyle = {
			width: tasksCompleted / totalTasks * 100 + '%'
		}

		return (
			<div className="fullWidth">
				<div className="statusBar textCenter">
					{ tasksCompleted } out of { totalTasks } tasks complete
					<span style={ ObjStyle }>&nbsp;</span>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		listItems: state
	}
}

export default connect(mapStateToProps)(StatusBar);