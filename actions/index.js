const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const MARK_AS_COMPLETE = 'MARK_AS_COMPLETE';

export function addTaskAction(taskToBeAdded) {
	return {
		type: 'ADD_TASK',
		payload: taskToBeAdded
	}
}

export function deleteTaskAction(taskIdToBeRemoved) {
	return {
		type: 'DELETE_TASK',
		payload: taskIdToBeRemoved
	}
}

export function markTaskAsComplete(taskIdTobeMarkedComplete) {
	return {
		type: 'MARK_AS_COMPLETE',
		payload: taskIdTobeMarkedComplete
	}
}