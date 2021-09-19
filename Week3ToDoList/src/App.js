import TodoList from './components/todolist'
import Data from './store'

function App() {
  return (
    <TodoList data={Data}/>
  )
}

export default App;