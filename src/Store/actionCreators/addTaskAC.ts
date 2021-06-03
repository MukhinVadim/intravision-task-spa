import { AddTaskActions, AddTaskActionTypes } from "../../Types/addTaskTypes";
import { tasksAPI } from "../../API/_API";
import { getTask } from "./editTaskAC";
import { ThunkType } from "../../Types/indexTypes";
import { getTasks } from "./tasksAC";


export const setIsAdd = (isAdd: boolean): AddTaskActions => ({type: AddTaskActionTypes.IS_ADD, payload: isAdd})

export const addTask = (name: string, description: string) : ThunkType => {
  return async (dispatch) => {
    try {
      tasksAPI.addTask(name, description).then(response => {
        dispatch(setIsAdd(false))
        dispatch(getTasks())
        dispatch(getTask(response.data))
      })
    } catch (e) {
      console.log(e)
    }
  }
}


