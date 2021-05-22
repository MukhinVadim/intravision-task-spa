import React, { useReducer } from 'react'
import { Context } from "./Context";
import { reducer } from "../Reducers/reducer"
import { State } from "../types";
import { tasksAPI } from "../API/_API";
import {
	ADD_TASK,
	SET_TASK,
	SET_TASKS,
	IS_ADD,
	IS_EDIT,
	SET_STATUSES,
	SET_PRIORITIES,
	SET_STATUS, SET_USERS
} from "./ActionTypes";

export const StateContext: React.FC = ({children}) => {
	const initialState: State = {
		tasks: [],
		statuses: [],
		priorities: [],
		users: [],
		task: {},
		isAdd: false,
		isEdit: false,
		status: {}
	}
	const [ state, dispatch ] = useReducer(reducer, initialState)

	/*---API---*/
	const getTasks = () => {
		tasksAPI.getTasks().then(response => {
			dispatch({type: SET_TASKS, payload: response.data.value})
		})
	}

	const getTask = (id: number) => {
		tasksAPI.getTask(id).then(response => {
			dispatch({type: SET_TASK, payload: response.data})
			setIsEdit(true)
		})
	}

	const getStatuses = () => {
		tasksAPI.getStatuses().then(response => {
			dispatch({type: SET_STATUSES, payload: response.data})
		})
	}

	const getPriorities = () => {
		tasksAPI.getPriorities().then(response => {
			dispatch({type: SET_PRIORITIES, payload: response.data})
		})
	}

	const getUsers = () => {
		tasksAPI.getUsers().then(response => {
			dispatch({type: SET_USERS, payload: response.data})
		})
	}

	const addTask = (name: string, description: string) => {
		tasksAPI.addTask(name, description).then(response => {
			dispatch({
				type: ADD_TASK, payload: {name, description, id: response.data}
			})
			setIsAdd(false)
			getTask(response.data)
		})
	}

	const editTask = (id: number, statusId: number, priorityId: number, executorId: number, comment: string) => {
		tasksAPI.editTask(id, statusId, priorityId, executorId, comment).then(() => {
			getTask(id)
			getTasks()
		})
	}

	/*---Logic---*/
	const setIsAdd = (isAdd: boolean) => {
		dispatch({type: IS_ADD, payload: isAdd})
	}

	const setIsEdit = (isEdit: boolean) => {
		dispatch({type: IS_EDIT, payload: isEdit})
	}

	const setStatus = (selectedStatus: string) => {
		dispatch({type: SET_STATUS, payload: selectedStatus})
	}

	return (
		<Context.Provider value={ {
			state,
			getTasks,
			getTask,
			addTask,
			setIsAdd,
			setIsEdit,
			editTask,
			getStatuses,
			getPriorities,
			getUsers,
			setStatus
		} }>
			{ children }
		</Context.Provider>
	)
}