export type AddTaskState = {
  isAdd: boolean
}

export type AddTaskActions = IsAddTaskAction

export type IsAddTaskAction = {
  type: AddTaskActionTypes.IS_ADD
  payload: boolean
}

export enum AddTaskActionTypes {
  IS_ADD = "IS_ADD",
}

