const Todo = ({ todo, todos, setTodos }) => {
    const compeleteHandler = () => {
        setTodos(
            todos.map(todoElement => {
                if (todoElement.id === todo.id) {
                    return ({ ...todoElement, completed: !todo.completed })
                }
                return todoElement
            })
        )
    }

    const deleteHandler = () => {
        setTodos(
            todos.filter(todoElement => {
                return todoElement.id !== todo.id
            })
        )
    }
    return (
        <div>

            <li style={{ color: todo.completed ? 'lightgreen' : 'red' }}>{todo.text}
                <button onClick={compeleteHandler}>  {todo.completed ? 'Incompelete' : 'Complete'}</button>
                <button onClick={deleteHandler}>  Delete</button>
            </li>
        </div>
    )

}

export default Todo