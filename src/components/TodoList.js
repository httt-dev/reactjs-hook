import React, { useState } from 'react'
import _ from 'lodash'
import AddTodo from './AddTodo'
import DisplayTodo from './DisplayTodo'

const TodoList = () => {
    //khai bao state va khoi tao gia tri cho state
    //useState : tra ve 2 gia tri 
    const [todo, setTodo] = useState("")
    const [listTodos, setListTodo] = useState([
        { id: 'todo1', name: 'To do 1' },
        { id: 'todo2', name: 'To do 2' },
        { id: 'todo3', name: 'To do 3' },
        { id: 'todo4', name: 'To do 4' },
    ]
    )
    const handleOnClickBtn = (event, data) => {
        if (!data) {
            alert("Todo's name is not empty");
            return;
        }

        let todoItem = {
            id: `todo${randomInt(10, 1000000)}`, name: data
        }
        //not working
        //let currentTodoList = listTodos;

        let currentTodoList = _.clone(listTodos);

        currentTodoList.push(todoItem);
        setListTodo(currentTodoList);
        //setListTodo([...listTodos, todoItem])
        setTodo("");
    }

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const handleDeleteTodo = (id) => {
        console.log(id);
        let currentTodoList = _.clone(listTodos);
        currentTodoList = currentTodoList.filter(item => item.id != id);
        setListTodo(currentTodoList);
    }
    return (
        <div>
            <AddTodo />

            <label>Todo's Name</label>
            <input type="text" value={todo} onChange={(data) => setTodo(data.target.value)} />
            <button type="button" onClick={(env) => handleOnClickBtn(env, todo)}>Add todo</button>
            <br></br>
            <DisplayTodo
                childData={listTodos}
                name={"Test"}
            />

            {/* <div>----------------Todo list----------------</div> */}
            {/* <button type="button" onClick={handleOnClickBtn}>Submit</button> */}
            {/* {
                listTodos.map((item, index) => {
                    return (
                        <div key={item.id} id={item.id} onClick={() => handleDeleteTodo(item.id)}>
                            {item.name}
                        </div>
                    )
                })
            } */}
        </div>
    );
}

// class TodoList extends React.Component {
//     state = {
//         name: 'Hoa'
//     }

//     render() {
//         return (
//             <div>
//                 <label>Name</label>
//                 <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
//                 <br></br>
//                 Todo list with name = {this.state.name}
//             </div>

//         )
//     }
// }
export default TodoList;