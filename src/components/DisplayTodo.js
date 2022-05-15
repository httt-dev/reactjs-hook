const DisplayTodo = (props) => {
    const listTodos = props.childData;
    const deleteTodo = (id) => {

        props.deleteTodoInParent(id);
    }
    return (
        <div>
            <div>----------------Todo list----------------</div>
            {/* <button type="button" onClick={handleOnClickBtn}>Submit</button> */}
            {
                listTodos.map((item, index) => {
                    return (
                        <div key={item.id} id={item.id} onClick={() => deleteTodo(item.id)}>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayTodo;
