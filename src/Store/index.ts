import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import {taskReducer} from "./reducers/taskReduser/taskReducer";

const rootReducer = combineReducers({
  task: taskReducer
})
export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))