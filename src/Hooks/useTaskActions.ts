import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TasksActionCreators from "../Store/actionCreators/tasksAC"


export const useTaskActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(TasksActionCreators, dispatch)
}
