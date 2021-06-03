import React, { useState } from "react"
import styles from "../EditTask.module.css"
import { useEditTaskActions } from "../../../../Hooks/useEditTaskActions";
import { useTypedSelector } from "../../../../Hooks/useTypedSelector";

export const CommentForm: React.FC = () => {

  const [comment, setComment] = useState('')
  const {task} = useTypedSelector(state => state.editTask)
  const {addComment} = useEditTaskActions()

  const handleCommentChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const name = e.currentTarget.value
    setComment(name)
  }
  const handleSubmit = () => {
    if (!/^\s*$/.test(comment) && comment) {
      addComment(task.id, task.statusId, task.executorId, task.priorityId, comment)
      setComment('')
    }
  }

  return (
    <div className={ styles.form }>
							<textarea id="comment" name="comment" className={ styles.commentForm }
                        value={ comment }
                        onChange={ handleCommentChange } required/>
      <button onClick={handleSubmit}>
        Сохранить
      </button>
    </div>
  )
}