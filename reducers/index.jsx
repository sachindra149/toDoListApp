const initialState=[{id:1,title:"Delectus aut autem",completed:false},{id:2,title:"Quis ut nam facilis et officia qui",completed:false},{id:3,title:"Fugiat veniam minus",completed:false},{id:4,title:"Et porro tempora",completed:true},{id:5,title:"Laboriosam mollitia et enim quasi adipisci quia provident illum",completed:false},{id:6,title:"Qui ullam ratione quibusdam voluptatem quia omnis",completed:false}];

const toDoAppReducer = (state = initialState, action) => {

	switch(action.type) {

		case 'ADD_TASK' :
			let newItem = {
				id: state.length + 1,
				title: action.payload,
				completed: false
			}
			return Object.values(state).concat(newItem);
		
		case 'REMOVE_TASK' :
			return Object.values(state).filter((item) => item.id !== action.payload);
		
		case 'MARK_COMPLETE' :
			let toBeModifiedState = Object.assign({}, state);
			let newListWithItemsMarkedComplete = Object.values(toBeModifiedState).find( (item) => item.id === action.payload ).completed = true;
			return toBeModifiedState;
		
		default:
			return state;

	}

}

export default toDoAppReducer;