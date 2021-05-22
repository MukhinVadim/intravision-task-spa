import React, { useContext } from "react"
import styles from "./AddTask.module.css"
import close from "../../../../Assets/img/close.png"
import { Context } from "../../../../Context/Context";
import { AddForm } from "./AddForm/AddForm";

export const AddTask: React.FC = () => {
	const {setIsAdd} = useContext(Context)
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