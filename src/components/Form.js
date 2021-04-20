const Form = ({ inputTodo, setInputTodo, todos, setTodos, filteredTodo, setFilteredTodo, setOptionState, optionState }) => {
    const changeHandler = (e) => {
        setInputTodo(e.target.value)
    }
    const submitHandler = (e) => {
        setTodos([
            ...todos,
            {
                text: inputTodo,
                id: Math.random() * 1000,
                completed: false
            }
        ]
        )
        e.preventDefault()
        setInputTodo('')
    }

    return (
        <form className='form'>
            <h2 htmlFor='input-todo'>What are you going to do?</h2>
            <div>
                <input type='text' id='input-todo' placeholder='Enter todo' onChange={changeHandler} value={inputTodo} />
                <button type='submit' onClick={submitHandler}>Add</button>
            </div>
            <div>
                <select onChange={(e) => setOptionState(e.target.value)}>
                    <option value='All'>All</option>
                    <option value='Compeleted'>Completed</option>
                    <option value='Incompleted'>Incompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form