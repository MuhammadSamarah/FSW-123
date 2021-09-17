import './App.css';
import ToDo from './ToDoList';
import { items } from './store';
import React from "react";
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {items: items}

    this.dltBtn = this.dltBtn.bind(this);
}

toggleComplete = (e) => {
    console.log("this checkbox was checked", e.target)
    var newArray = this.state.items.map(item => {
      if(e.target.id === item.id){
        if(item.isCompleted === true){
          item.isCompleted = false
          return item
        } else 
        {
          item.isCompleted = true

          return item
        }

        } else {
        return item
    }
}) 
    console.log(newArray)
    this.setState({
      items: newArray
    })
  }
dltBtn = (e) => {
    console.log("this item was removed")
    if(e){
      let dltd = [...this.state.items];
      let index = dltd.findIndex(item => item.id === e);
      dltd.splice(index, 1)
      this.setState({
        items: dltd
      })
    }
}

render(){
    return (
      <div>
        <h1>ToDoList 3</h1>
        <ToDo items = {this.state.items} toggleComplete = {this.toggleComplete} dltBtn = {this.dltBtn}/>
      </div>
    )
  }
}

export default App;