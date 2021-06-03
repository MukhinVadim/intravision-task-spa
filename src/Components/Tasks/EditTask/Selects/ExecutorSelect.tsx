import React from "react"
import styles from "./Selects.module.css"
import { useTypedSelector } from "../../../../Hooks/useTypedSelector";
import { useEditTaskActions } from "../../../../Hooks/useEditTaskActions";


export const ExecutorSelect: React.FC = () => {

  const {users, task} = useTypedSelector(state => state.editTask)
  const {setExecutor} = useEditTaskActions()

  const handleChangeExecutor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userName = event.target.value
    // @ts-ignore
    const selectedExecutor: Executor = users.find((user: any) => user.name === userName) //точно не вернет undefined
    setExecutor(selectedExecutor, task.id, task.statusId, task.priorityId)
  }

  return (
    <div>
      <select name="executor" onChange={ handleChangeExecutor }
              value={ task.executorName }
              className={ styles.select }>
        {
          users.map((user: any) =>
            <option value={ user.name } key={ user.id }>
              { user.name }
            </option>
          )
        }
      </select>
    </div>
  )
}