const AddTodo = (props) => {
    const { todo, setTodo, handleOnClickBtn } = props
    return (
        <div><label>Todo's Name</label>
            <input type="text" value={todo} onChange={(data) => setTodo(data.target.value)} />
            <button type="button" onClick={(env) => handleOnClickBtn(env, todo)}>Add todo</button></div>
    )
}

export default AddTodo;