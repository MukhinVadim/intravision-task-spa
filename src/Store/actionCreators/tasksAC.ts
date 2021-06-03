import { TaskActionTypes } from "../../Types/taskTypes";

import { tasksAPI } from "../../API/_API";
import { ThunkType } from "../../Types/indexTypes";

export const getTasks = (): ThunkType => {
  return async (dispatch) => {
    try {
      tasksAPI.getTasks().then(response => {
        dispatch({type: TaskActionTypes.SET_TASKS, payload: response.data.value})
      })
    } catch (e) {
      console.log(e)
    }
  }
}

