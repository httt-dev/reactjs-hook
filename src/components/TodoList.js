import React, { useState } from 'react'

const TodoList = () => {
    //khai bao state va khoi tao gia tri cho state
    //useState : tra ve 2 gia tri 
    const [name, setName] = useState("Hoa")
    const handleOnClickBtn = (event, data) => {
        console.log("Click event", data);
    }
    return (
        <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(data) => setName(data.target.value)} />
            <br></br>
            Todo list ... name ={name}
            <button type="button" onClick={(env) => handleOnClickBtn(env, 'data')}>Submit</button>
            {/* <button type="button" onClick={handleOnClickBtn}>Submit</button> */}
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