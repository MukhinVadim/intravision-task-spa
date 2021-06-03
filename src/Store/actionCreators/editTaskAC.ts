import { EditTaskActions, EditTaskActionTypes, Executor, Status } from "../../Types/editTaskTypes";
import { tasksAPI } from "../../API/_API";
import { setIsAdd } from "./addTaskAC";
import { ThunkType } from "../../Types/indexTypes";
import { getTasks } from "./tasksAC";

//ActionCreators
export const setIsEdit = (isEdit: boolean): EditTaskActions => ({
  type: EditTaskActionTypes.IS_EDIT, payload: isEdit
})

// Thunks
export const getTask = (id: number): ThunkType => {
  return async (dispatch) => {
    try {
      tasksAPI.getTask(id).then(response => {
        dispatch({type: EditTaskActionTypes.SET_TASK, payload: response.data})
        dispatch(setIsAdd(false))
        dispatch(setIsEdit(true))
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const getPriorities = (): ThunkType => {
  return async (dispatch) => {
    try {
      tasksAPI.getPriorities().then(response => {
        dispatch({type: EditTaskActionTypes.SET_PRIORITIES, payload: response.data})
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const getStatuses = (): ThunkType => {
  return async (dispatch) => {
    try {
      tasksAPI.getStatuses().then(response => {
        dispatch({type: EditTaskActionTypes.SET_STATUSES, payload: response.data})
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const getUsers = (): ThunkType => {
  return async (dispatch) => {
    try {
      tasksAPI.getUsers().then(response => {
        dispatch({type: EditTaskActionTypes.SET_USERS, payload: response.data})
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const setStatus = (status: Status, id: number, priorityId: number, executorId: number): ThunkType => {
  return async (dispatch) => {
    try {
      tasksAPI.editTask(id, status.id, priorityId, executorId, '').then(() => {
        dispatch({type: EditTaskActionTypes.SET_STATUS, payload: status})
        dispatch(getTasks())
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const setExecutor = (executor: Executor, id: number, statusId: number, priorityId: number): ThunkType => {
  return async (dispatch) => {
    try {
      tasksAPI.editTask(id, statusId, priorityId, executor.id, '').then(() => {
        dispatch({type: EditTaskActionTypes.SET_EXECUTOR, payload: executor})
        dispatch(getTasks())
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const addComment = (id: number, statusId: number, executorId: number, priorityId: number, comment: string): ThunkType => {
  return async (dispatch) => {
    try {
      tasksAPI.editTask(id, statusId, priorityId, executorId, comment).then(() => {
        dispatch({type: EditTaskActionTypes.ADD_COMMENT, payload: comment})
        dispatch(getTasks())
        dispatch(getTask(id))
      })
    } catch (e) {
      console.log(e)
    }
  }
}
