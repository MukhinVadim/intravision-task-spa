import { State, TaskAction, TaskActionTypes } from "./taskReducerTypes";

export const taskReducer = (state: State, action: TaskAction): State => {
  switch (action.type) {
    case TaskActionTypes.SET_TASKS: {
      return {...state, tasks: action.payload}
    }
    case TaskActionTypes.SET_TASK: {
      return {...state, task: action.payload}
    }
    case TaskActionTypes.IS_EDIT: {
      return {
        ...state,
        isEdit: action.payload,
      }
    }
    case TaskActionTypes.ADD_TASK: {
      return {
        ...state,
        tasks: [
          // ...state.tasks,
          action.payload
        ]
      }
    }
    case TaskActionTypes.IS_ADD: {
      return {
        ...state,
        isAdd: action.payload
      }
    }

    case TaskActionTypes.SET_STATUSES: {
      return {
        ...state,
        statuses: action.payload,
      }
    }
    case TaskActionTypes.SET_PRIORITIES: {
      return {
        ...state,
        priorities: action.payload,
      }
    }
    case TaskActionTypes.SET_USERS: {
      return {
        ...state,
        users: action.payload,
      }
    }
    default:
      return state
  }
}