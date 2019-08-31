const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const MARK_COMPLETE = 'MARK_COMPLETE';

export function add_task(task_to_be_added) {
	return {
		type: 'ADD_TASK',
		payload: task_to_be_added
	}
}

export function remove_task(task_id) {
	return {
		type: 'REMOVE_TASK',
		payload: task_id
	}
}

export function mark_complete(task_id) {
	return {
		type: 'MARK_COMPLETE',
		payload: task_id
	}
}