import { ThunkAction } from "redux-thunk";
import { RootState } from "../Store/store";
import { TaskActions } from "./taskTypes";
import { AddTaskActions } from "./addTaskTypes";
import { EditTaskActions } from "./editTaskTypes";

type Action =  TaskActions | AddTaskActions | EditTaskActions

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, Action>