import React, { useState } from 'react';
import styles from "./AddForm.module.css"
import { useAddTaskAction } from "../../../../Hooks/useAddTaskActions";

export const AddForm: React.FC = () => {

	const {addTask} = useAddTaskAction()

	const [name, setName] = useState('')
	const [description, setDescription] = useState('')

	const handleNameChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
		const name = e.currentTarget.value
		setName(name)
	}
	const handleDescriptionChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
		const description = e.currentTarget.value
		setDescription(description)
	}
	const handleSubmit = () => {
		if (!/^\s*$/.test(name) && name && !/^\s*$/.test(description) && description) {
			addTask(name, description)
		}
	}

	return (
		<div className={ styles.form }>
				<label htmlFor="name">Название</label>
				<textarea id="name" name="name" className={ styles.nameForm }
									value={name}
									onChange={e => handleNameChange(e)}/>
				<label htmlFor="description">Описание</label>
				<textarea id="description" name="description" className={ styles.descriptionForm }
									value={description}
									onChange={e => handleDescriptionChange(e)}/>
				<button onClick={handleSubmit}>
					Сохранить
				</button>
		</div>
	)
}