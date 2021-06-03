export type EditTaskState = {
  isEdit: boolean
  task: Task
  statuses: Status[]
  priorities: []
  users: Executor[]
}
export type Status = {
  id: number
  name: ''
  rgb: ''
}
export type Executor = {
  id: number
  name: ''
}


export type Task = {
  id: number
  name: string
  statusId: number
  statusRgb: string
  statusName: string
  executorId: number
  executorName: string
  priorityId: number
  priorityName: string
  description: string
  initiatorName: string
  resolutionDatePlan: string
  lifetimeItems: [
    {
      comment: string
    }
  ]
}

export type EditTaskActions = IsEditTaskAction | SetTaskAction | SetStatusesAction | SetUsersAction
  | SetPrioritiesAction | SetStatusAction | SetPriorityAction | SetExecutorAction | addCommentAction

export type IsEditTaskAction = {
  type: EditTaskActionTypes.IS_EDIT
  payload: boolean
}
export type SetTaskAction = {
  type: EditTaskActionTypes.SET_TASK
  payload: Task
}
export type SetStatusesAction = {
  type: EditTaskActionTypes.SET_STATUSES
  payload: Status[]
}
export type SetUsersAction = {
  type: EditTaskActionTypes.SET_USERS
  payload: []
}
export type SetPrioritiesAction = {
  type: EditTaskActionTypes.SET_PRIORITIES
  payload: []
}

export type SetStatusAction = {
  type: EditTaskActionTypes.SET_STATUS
  payload: Status
}
export type SetPriorityAction = {
  type: EditTaskActionTypes.SET_PRIORITY
  payload: string
}
export type SetExecutorAction = {
  type: EditTaskActionTypes.SET_EXECUTOR
  payload: Executor
}
export type addCommentAction = {
  type: EditTaskActionTypes.ADD_COMMENT
  payload: string
}



export enum EditTaskActionTypes {
  IS_EDIT = "IS_EDIT",
  SET_TASK = "SET_TASK",
  SET_STATUSES = "SET_STATUSES",
  SET_PRIORITIES = "SET_PRIORITIES",
  SET_USERS = "SET_USERS",
  SET_STATUS = "SET_STATUS",
  SET_EXECUTOR = "SET_EXECUTOR",
  SET_PRIORITY = "SET_PRIORITY",
  ADD_COMMENT = "ADD_COMMENT"
}

