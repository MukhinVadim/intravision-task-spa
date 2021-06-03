import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import {taskReducer} from "./reducers/taskReducer";
import {editTaskReducer} from "./reducers/editTaskReducer";
import { addTaskReducer } from "./reducers/addTaskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  editTask: editTaskReducer,
  addTask: addTaskReducer
})
export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))