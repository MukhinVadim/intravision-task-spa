import { AddTaskActions, AddTaskActionTypes, AddTaskState } from "../../Types/addTaskTypes";

const initialState: AddTaskState = {
  isAdd: false,
}

export const addTaskReducer = (state = initialState, action: AddTaskActions): AddTaskState => {
  switch (action.type) {
    case AddTaskActionTypes.IS_ADD: {
      return {
        ...state,
        isAdd: action.payload,
      }
    }
    default:
      return state
  }
}