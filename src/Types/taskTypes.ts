import { Task } from "./editTaskTypes";

export type TaskState = {
  tasks: Task[]
}

export type TaskActions = SetTasksAction

export type SetTasksAction = {
  type: TaskActionTypes.SET_TASKS
  payload: Task[]
}





export enum  TaskActionTypes {
  SET_TASKS = "SET_TASKS",
}