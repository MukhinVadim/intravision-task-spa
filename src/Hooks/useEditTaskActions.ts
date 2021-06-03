import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as EditTaskActionCreators from "../Store/actionCreators/editTaskAC"


export const useEditTaskActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(EditTaskActionCreators, dispatch)
}
