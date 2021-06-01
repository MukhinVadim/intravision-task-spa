import React, { useContext } from "react"
import styles from "../EditTask.module.css"
import { useFormik } from "formik";
import { Context } from "../../../../../Context/Context";

export const CommentForm: React.FC = () => {

  const {addComment} = useContext(Context)

  const formik = useFormik({
    initialValues: {
      comment: '',
    },
    onSubmit: values => {
      addComment(values.comment)
    }
  })

  return (
    <form onSubmit={ formik.handleSubmit } className={ styles.form }>
							<textarea id="comment" name="comment" className={ styles.commentForm }
                        value={ formik.values.comment }
                        onChange={ formik.handleChange } required/>
      <button type="submit">
        Сохранить
      </button>
    </form>
  )
}