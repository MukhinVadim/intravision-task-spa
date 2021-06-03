import { TaskState, TaskActions, TaskActionTypes } from "../../Types/taskTypes";

const initialTaskState: TaskState = {
  tasks: [
    {
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
  ],
}

export const taskReducer = (state = initialTaskState, action: TaskActions): TaskState => {
  switch (action.type) {
    case TaskActionTypes.SET_TASKS: {
      return {...state, tasks: action.payload}
    }
    default:
      return state
  }
}