import { Action, State } from "../types";
import {
	ADD_TASK,
	SET_TASK,
	SET_TASKS,
	IS_ADD,
	IS_EDIT,
	SET_STATUSES,
	SET_PRIORITIES,
	SET_STATUS, SET_USERS
} from "../Context/ActionTypes";


export const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case SET_TASKS: {
			return {...state, tasks: action.payload}
		}
		case SET_TASK: {
			return {...state, task: action.payload}
		}
		case SET_STATUS: {
			return {...state, status: action.payload}
		}
		case ADD_TASK: {
			return {
				...state,
				tasks: [ ...state.tasks,
					{
						id: action.payload.id,
						name: action.payload.name,
						description: action.payload.description
					}
				]
			}
		}
		case IS_ADD: {
			return {...state,
				isAdd: action.payload
			}
		}
		case IS_EDIT: {
			return {
				...state,
					isEdit: action.payload,
			}
		}
		case SET_STATUSES: {
			return {
				...state,
				statuses: action.payload,
			}
		}
		case SET_PRIORITIES: {
			return {
				...state,
				priorities: action.payload,
			}
		}
		case SET_USERS: {
			return {
				...state,
				users: action.payload,
			}
		}
		default:
			return state
	}
}