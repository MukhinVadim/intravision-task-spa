import React, { useContext, useEffect, useState } from "react"
import styles from "./EditTask.module.css"
import close from "../../../../Assets/img/close.png"
import { Comments } from "./Comments/Comments"
import { Context } from "../../../../Context/Context";
import Moment from "react-moment";
import { CommentForm } from "./Comments/CommentForm";

export const EditTask: React.FC = () => {

  const {state, setIsEdit, setStatus, setExecutor} = useContext(Context)

  const task = state.task
  const statuses = state.statuses

  const [form, setForm] = useState({
    status: {
      id: task.statusId,
      name: task.statusName,
      rgb: task.statusRgb
    },
    executor: {
      id: task.executorId,
      name: task.executorName
    },
    priority: {
      id: task.priorityId,
      name: task.priorityName
    }
  })

  const handleChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const statusName = event.target.value
    const selectedStatus = statuses.find((status: any) => status.name === statusName)
    setForm({
      ...form, status: selectedStatus
    })
  }

  const handleChangeExecutor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userName = event.target.value
    const selectedUser = state.users.find((user: any) => user.name === userName)
    setForm({
      ...form, executor: selectedUser
    })
  }

  const handleChangePriority = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const priorityName = event.target.value
    const selectedPriority = state.priorities.find((priority: any) => priority.name === priorityName)
    setForm({
      ...form, priority: selectedPriority
    })
  }

  useEffect(() => {
    setStatus(form.status.id)
  }, [form.status])

  useEffect(() => {
    setExecutor(form.executor.id)
  }, [form.executor])

  return (
    <div className={ styles.wrapper }>
      <div className={ styles.header }>
				<span className={ styles.taskId }>
					№ { task.id }
				</span>
        <div className={ styles.taskName }>
          {
            task.name.length > 110 ?
              `${ task.name.substring(0, 110) }...` : task.name
          }
        </div>
        <button onClick={ () => setIsEdit(false) }>
          <img src={ close } alt="close"/>
        </button>
      </div>
      <div className={ styles.contentWrapper }>
        <div className={ styles.leftCol }>
					<span>
						Описание
					</span>
          <div className={ styles.description }>
            { task.description }
          </div>
          <span>
						Добавление коментариев
					</span>
          <CommentForm/>
          <Comments/>
        </div>
        <div className={ styles.rightCol }>
          <div className={ styles.status }>
            <div style={ {background: `${ form.status.rgb }`} }
                 className={ styles.statusColor }/>
            <select name="status" onChange={ handleChangeStatus }
                    value={ form.status.name }>
              {
                state.statuses.map((status: any) =>
                  <option value={ status.name } key={ status.id }>
                    { status.name }
                  </option>
                ) }
            </select>
          </div>
          <span>Заявитель</span>
          <div className={ styles.initiator }>{ task.initiatorName }</div>
          <span>Создана</span>
          <div className={ styles.status }>{ task.initiatorName }</div>
          <span>Исполнитель</span>
          <div className={ styles.status }>
            <select name="executor" onChange={ handleChangeExecutor }
                    value={ form.executor.name }>
              {
                state.users.map((user: any) =>
                  <option value={ user.name } key={ user.id }>
                    { user.name }
                  </option>
                )
              }
            </select>
          </div>
          <span>Приоритет</span>
          <div className={ styles.status }>
            <select name="priority" onChange={ handleChangePriority }
                    value={ form.priority.name }>
              {
                state.priorities.map((priority: any) =>
                  <option value={ priority.name } key={ priority.id }>
                    { priority.name }
                  </option>
                ) }
            </select>
          </div>
          <span>Срок</span>
          <div className={ styles.status }>
            { task.resolutionDatePlan ?
              <>
                <Moment format="DD.mm.yyyy">
                  { task.resolutionDatePlan }
                </Moment>
                <p>г.</p></>
              : null
            }
          </div>
          <span>Теги</span>
        </div>
      </div>
    </div>
  )
}