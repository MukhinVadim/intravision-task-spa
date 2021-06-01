export type State = {
  tasks: [
    {
      id: number,
      name: string,
      description: string,
    }
  ]
  users: any[]
  statuses: any[]
  priorities: any[]
  task: {}
  status: {}
  isAdd: boolean
  isEdit: boolean
}

export type TaskAction = SetTasksAction | IsAddAction | AddTaskAction | IsEditAction |
  SetTaskAction | SetStatusesAction | SetPrioritiesAction | SetUsersAction
export type SetTasksAction = {
  type: TaskActionTypes.SET_TASKS
  payload: [
    {
      id: number,
      name: string,
      description: string,
    }
  ]
}
export type IsAddAction = {
  type: TaskActionTypes.IS_ADD
  payload: boolean
}
export type AddTaskAction = {
  type: TaskActionTypes.ADD_TASK
  payload:
    {
      id: number,
      name: string,
      description: string,
    }

}
export type IsEditAction = {
  type: TaskActionTypes.IS_EDIT
  payload: boolean
}
export type SetTaskAction = {
  type: TaskActionTypes.SET_TASK
  payload: {}
}
export type SetStatusesAction = {
  type: TaskActionTypes.SET_STATUSES
  payload: any[]
}
export type SetPrioritiesAction = {
  type: TaskActionTypes.SET_PRIORITIES
  payload: any[]
}
export type SetUsersAction = {
  type: TaskActionTypes.SET_USERS
  payload: any[]
}

export enum TaskActionTypes {
  SET_TASKS = "SET_TASKS",
  IS_ADD = "IS_ADD",
  ADD_TASK = "ADD_TASK",
  IS_EDIT = "IS_EDIT",
  SET_TASK = "SET_TASK",
  SET_STATUSES = "SET_STATUSES",
  SET_PRIORITIES = "SET_PRIORITIES",
  SET_USERS = "SET_USERS"
}