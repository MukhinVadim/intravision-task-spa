import React from "react"
import styles from "../EditTask.module.css"
import Moment from "react-moment"
import "moment/locale/ru"
import { useTypedSelector } from "../../../../Hooks/useTypedSelector";


export const Comments: React.FC = () => {

	const {task} = useTypedSelector(state => state.editTask)

	return (
		<>
			{ task.lifetimeItems.map((comment: any) =>
				!/^\s*$/.test(comment.comment) && comment.comment ? <div className={ styles.commentContainer } key={comment.id}>
				<div className={ styles.ava }>
					<div/>
				</div>
				<div className={ styles.comment }>
					<div className={ styles.commentName }>
						{ task.initiatorName }
					</div>
					<div className={ styles.commentDate }>
						<Moment format="D MMM, HH:mm" withTitle locale="ru">
							{ comment.createdAt }
						</Moment>
						&nbsp; прокомментировал
					</div>
					<div className={ styles.commentBody }>{ comment.comment }</div>
				</div>
				</div>: null) }
		</>
	)
}