import Todo from './Todo'
const Todos = ({ todos, setTodos }) => {
    return (
        <div>
            {todos.length > 0 ? (
                <ul>
                    {todos.map(todo => (
                        <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                    )
                    )}
                </ul>
            ) : null}
        </div>
    )
}

export default Todos