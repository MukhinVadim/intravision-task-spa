import React from "react"
import styles from "./AddTask.module.css"
import close from "../../../Assets/img/close.png"
import { AddForm } from "./AddForm/AddForm";
import { useAddTaskAction } from "../../../Hooks/useAddTaskActions";

export const AddTask: React.FC = () => {

	const {setIsAdd} = useAddTaskAction()

	return(
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<span>Новая заявка</span>
				<button onClick={() => setIsAdd(false)}>
					<img src={close} alt="close" />
				</button>
			</div>
			<div className={styles.container}>
				<AddForm/>
			</div>
		</div>
	)
}