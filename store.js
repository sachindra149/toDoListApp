import { createStore } from 'redux';
import ToDoAppReducer from './reducers/index.js';

const store = createStore(ToDoAppReducer);
export default store;