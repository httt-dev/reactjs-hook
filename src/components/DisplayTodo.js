const DisplayTodo = (props) => {
    const listTodos = props.childData;
    const handleDeleteTodo = (id) => { }
    return (
        <div>
            <div>----------------Todo list----------------</div>
            {/* <button type="button" onClick={handleOnClickBtn}>Submit</button> */}
            {
                listTodos.map((item, index) => {
                    return (
                        <div key={item.id} id={item.id} onClick={() => handleDeleteTodo(item.id)}>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayTodo;
