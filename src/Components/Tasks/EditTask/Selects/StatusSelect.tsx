import React from "react"
import styles from "./Selects.module.css"
import { useTypedSelector } from "../../../../Hooks/useTypedSelector";
import { useEditTaskActions } from "../../../../Hooks/useEditTaskActions";


export const StatusSelect: React.FC = () => {

  const {statuses, task} = useTypedSelector(state => state.editTask)
  const {setStatus} = useEditTaskActions()


  const handleChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const statusName = event.target.value
    // @ts-ignore
    let selectedStatus: Status = statuses.find((status) => status?.name === statusName) //точно не вернет undefined
    setStatus(selectedStatus, task.id, task.priorityId, task.executorId)
  }

  return (
    <div className={ styles.status }>
      <div style={ {background: `${ task.statusRgb }`} }
           className={ styles.statusColor }/>
      <select name="status" onChange={ handleChangeStatus }
              value={ task.statusName }>
        {
          statuses.map((status: any) =>
            <option value={ status.name } key={ status.id }>
              { status.name }
            </option>
          ) }
      </select>
    </div>
  )
}