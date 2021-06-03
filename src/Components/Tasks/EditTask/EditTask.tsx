import React from "react"
import styles from "./EditTask.module.css"
import close from "../../../Assets/img/close.png"
import { Comments } from "./Comments/Comments"
import Moment from "react-moment";
import { CommentForm } from "./Comments/CommentForm";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { useEditTaskActions } from "../../../Hooks/useEditTaskActions";
import { StatusSelect } from "./Selects/StatusSelect";
import { ExecutorSelect } from "./Selects/ExecutorSelect";

export const EditTask: React.FC = () => {

  const {task} = useTypedSelector(state => state.editTask)
  const {setIsEdit} = useEditTaskActions()

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
          <StatusSelect/>
          <span>Заявитель</span>
          <div className={ styles.initiator }>{ task.initiatorName }</div>
          <span>Создана</span>
          <div className={ styles.status }>{ task.initiatorName }</div>
          <span>Исполнитель</span>
          <ExecutorSelect/>
          <span>Приоритет</span>
          <div>{task.priorityName}</div>
          <span>Срок</span>
          <div className={styles.date}>
            { task.resolutionDatePlan ?
              <>
                <Moment format="DD.mm.yyyy">
                  { task.resolutionDatePlan }
                </Moment>
                &nbsp; <p>г.</p>
              </>
              : null
            }
          </div>
          <span>Теги</span>
        </div>
      </div>
    </div>
  )
}