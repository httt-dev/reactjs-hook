import React from 'react'

// const TodoList = () => {

//     return (
//         <div>
//             Todo List
//         </div>
//     );
// }

class TodoList extends React.Component {
    state = {
        name: 'Hoa'
    }

    render() {
        return (
            <div>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <br></br>
                Todo list with name = {this.state.name}
            </div>

        )
    }
}
export default TodoList;