import React from "react"
import styles from "./TasksList.module.css"
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { getTask } from "../../../Store/actionCreators/editTaskAC";
import { useEditTaskActions } from "../../../Hooks/useEditTaskActions";
import { Task } from "../../../Types/editTaskTypes";


export const TasksList: React.FC = () => {

  const {tasks} = useTypedSelector(state => state.tasks)
  const {getTask} = useEditTaskActions()
  
  const handleClick = (taskId: number) => {
    getTask(taskId)
  }

  return (
    <table className={ styles.table }>
      <thead>
      <tr>
        <th/>
        <th>
          <div>
            ID
          </div>
        </th>
        <th>
          <div>
            Название
          </div>
        </th>
        <th>
          <div>
            Статус
          </div>
        </th>
        <th>
          <div>
            Исполнитель
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      { tasks.map((task: Task) =>
        <tr key={ task.id } onClick={ () => handleClick(task.id) }>
          <td className={ styles.priority }>
            <div style={ task.statusRgb ? {borderLeftColor: `${ task.statusRgb }`}
              : {borderLeftColor: "white"} }/>
          </td>
          <td>
            { task.id }
          </td>
          <td>
            { task.name.length > 85 ?
              `${ task.name.substring(0, 85) }...` : task.name
            }
          </td>
          <td>
            <div className={ styles.status } style={ {backgroundColor: `${ task.statusRgb }`} }>
              { task.statusName && task.statusName.length > 12 ?
                `${ task.statusName.substring(0, 12) }...` : task.statusName
              }
            </div>
          </td>
          <td>
            { task.executorName }
          </td>
        </tr>
      ) }
      </tbody>
    </table>
  )
}