import React, { useContext } from 'react';
import { useFormik } from 'formik';
import styles from "./AddForm.module.css"
import { Context } from "../../../../../Context/Context";

export const AddForm: React.FC = () => {

	const {addTask} = useContext(Context)

	const formik = useFormik({
			initialValues: {
			name: '',
			description: ''
		},
		onSubmit: values => {
			addTask(values.name, values.description)
		}
	})
	return (
		<>
			<form className={ styles.form } onSubmit={ formik.handleSubmit }>
				<label htmlFor="name">Название</label>
				<textarea id="name" name="name" className={ styles.nameForm }
									value={formik.values.name}
									onChange={formik.handleChange} required/>
				<label htmlFor="description">Описание</label>
				<textarea id="description" name="description" className={ styles.descriptionForm }
									value={formik.values.description}
									onChange={formik.handleChange} required/>
				<button type="submit">
					Сохранить
				</button>
			</form>
		</>
	)
}