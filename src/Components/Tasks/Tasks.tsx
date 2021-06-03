import React, { useEffect } from "react"
import styles from "./Tasks.module.css"
import { AddTask } from "./AddTask/AddTask"
import { EditTask } from "./EditTask/EditTask";
import { TasksList } from "./TasksList/TasksList";
import { useTaskActions } from "../../Hooks/useTaskActions";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { useAddTaskAction } from "../../Hooks/useAddTaskActions";
import { useEditTaskActions } from "../../Hooks/useEditTaskActions";


export const Tasks: React.FC = () => {

  const {isEdit} = useTypedSelector(state => state.editTask)
  const {isAdd} = useTypedSelector(state => state.addTask)
  const {getTasks} = useTaskActions()
  const {setIsAdd} = useAddTaskAction()
  const { getPriorities, getStatuses, getUsers} = useEditTaskActions()


  useEffect(() => {
    getTasks()
    getPriorities()
    getStatuses()
    getUsers()
  }, [])

  return (
    <div className={ styles.wrapper }>
      <div className={styles.leftCol}>
        <button className={ styles.btn } onClick={ () => setIsAdd(true) }>Создать заявку</button>
        <div className={ styles.tableContainer }>
            <TasksList/>
        </div>
      </div>
      <div className={styles.rightCol}>
        { isAdd ? <AddTask/> : null }
        { isEdit ? <EditTask/> : null }
      </div>
    </div>
  )
}