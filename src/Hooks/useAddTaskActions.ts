import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as AddTaskActionCreators from "../Store/actionCreators/addTaskAC"


export const useAddTaskAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AddTaskActionCreators, dispatch)
}
