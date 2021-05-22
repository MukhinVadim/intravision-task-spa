import React, { useContext, useEffect } from "react"
import styles from "./Tasks.module.css"
import { AddTask } from "./AddTask/AddTask";
import { Context } from "../../../Context/Context";
import { EditTask } from "./EditTask/EditTask";


export const Tasks = () => {

	const {state, getTasks, setIsAdd, getTask, getPriorities, getStatuses, getUsers} = useContext(Context)

	useEffect(() => {
		getTasks()
		getPriorities()
		getStatuses()
		getUsers()
	}, [])

	const priorityRgbSearcher = (priorityId: number) => {
		const priority = state.priorities.find((priority: any) => priority.id === priorityId)
		return priority?.rgb
	}

	return (
		<>
			<button className={ styles.btn } onClick={ () => setIsAdd(true) }>Создать заявку</button>
			<div className={ styles.tableContainer }>
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
					{ state.tasks.map((task: any) =>
						<tr key={ task.id } onClick={ () => {
							getTask(task.id)
						} }>
							<td className={ styles.priority }>
								<div style={ {borderLeftColor: `${ priorityRgbSearcher(task.priorityId) }`} }/>
							</td>
							<td>
								{ task.id }
							</td>
							<td>
								{ task.name.length > 100 ?
									`${ task.name.substring(0, 100) }...` : task.name
								}
							</td>
							<td>
								<div className={ styles.status } style={ {backgroundColor: `${ task.statusRgb }`} }>
									{ task.statusName }
								</div>
							</td>
							<td>
								{ task.executorName }
							</td>
						</tr>
					) }
					</tbody>
				</table>
				{ state.isAdd ? <AddTask/> : null }
				{ state.isEdit ? <EditTask/> : null }
			</div>
		</>
	)
}