import React from 'react'
import Todo from './todo'

class TodoList extends React.Component {
    constructor() {
        super();
        this.todos = [
        "Take out the trash.",
        "Go to the movies.",
        "Ride a bike.",
        "Out for dinner."
    ];
    }
    render() {
        return(
            <div className="todos">
                <h1>Todo List</h1>
                <ol>
                {
                    this.props.data.map((element, index) => {
                        return <Todo key={index} name={element.text} />
                    })
                }
                </ol>
            </div>
        )
    }
}
export default TodoList;