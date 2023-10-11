// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, onDeleteTodo} = props
  const {id, title} = todoItem

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="eachTodo">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
