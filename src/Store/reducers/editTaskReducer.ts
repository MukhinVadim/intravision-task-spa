import { EditTaskActions, EditTaskActionTypes, EditTaskState } from "../../Types/editTaskTypes";


const initialState: EditTaskState = {
  isEdit: false,
  task: {
    id: NaN,
    name: '',
    statusId: NaN,
    statusRgb: '',
    statusName: '',
    executorId: NaN,
    executorName: '',
    priorityId: NaN,
    priorityName: '',
    description: '',
    initiatorName: '',
    resolutionDatePlan: '',
    lifetimeItems: [
      {
        comment: ''
      }
    ]
  },
  statuses: [
    {
      id: NaN,
      name: '',
      rgb: '',
    }
  ],
  priorities: [],
  users: [],
}

export const editTaskReducer = (state = initialState, action: EditTaskActions): EditTaskState => {
  switch (action.type) {
    case EditTaskActionTypes.SET_STATUSES: {
      return {
        ...state,
        statuses: action.payload,
      }
    }
    case EditTaskActionTypes.SET_PRIORITIES: {
      return {
        ...state,
        priorities: action.payload,
      }
    }
    case EditTaskActionTypes.SET_USERS: {
      return {
        ...state,
        users: action.payload,
      }
    }
    case EditTaskActionTypes.IS_EDIT: {
      return {
        ...state,
        isEdit: action.payload,
      }
    }
    case EditTaskActionTypes.SET_TASK: {
      return {...state, task: action.payload}
    }
    case EditTaskActionTypes.SET_STATUS: {
      return {...state, task: {
          ...state.task,
          statusId: action.payload.id,
          statusName: action.payload.name,
          statusRgb: action.payload.rgb
        }}
    }
    case EditTaskActionTypes.SET_EXECUTOR: {
      return {...state, task: {
          ...state.task,
          executorId: action.payload.id,
          executorName: action.payload.name,
        }}
    }
    default:
      return state
  }
}