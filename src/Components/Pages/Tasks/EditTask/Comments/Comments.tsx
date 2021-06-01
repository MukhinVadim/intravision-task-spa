import React, { useContext } from "react"
import styles from "./EditTask.module.css"
import Moment from "react-moment"
import "moment/locale/ru"
import { Context } from "../../../../Context/Context";


export const Comments: React.FC = () => {

	const {state} = useContext(Context)

	return (
		<>
			{ state.task.lifetimeItems.map((comment: any) =>
			comment.comment ? <div className={ styles.commentContainer } key={comment.id}>
				<div className={ styles.ava }>
					<div/>
				</div>
				<div className={ styles.comment }>
					<div className={ styles.commentName }>
						{ state.task.initiatorName }
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