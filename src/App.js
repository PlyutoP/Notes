import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'

const styles = {
  title: {

      textAlign: 'center'
      
  }
}

function App() {
  const [todos, setTodos] = React.useState([
      {id:1,  title:'Заметка 1'},
      {id:2,  title:'Заметка 2'},
      {id:3,   title:'Заметка 3'}
    ]
  )

  // function toggleTodo(id) {
  //   setTodos(
  //     todos.map(todo => {
  //       if (todo.id === id) {
  //         todo.complited = !todo.complited
  //       }
  //       return todo
  //     })
  //   )
  // }

  function removeTodo(id) {
    setTodos(todos.filter(todo=>todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      complited: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
    <div className='wrapper'>
      <h1 style={styles.title}>Заметки</h1>
      <table width="100%" cellspacing="0" cellpadding="5">
      <tr>
      <td width="500" valign="top">
      {todos.length ? (
        <TodoList todos={todos} /> //onToggle={toggleTodo}
        ) : ( 
        <p> Нет заметок! </p>
      )}
      </td>
      <td width="500" valign="top">
      <AddTodo onCreate={addTodo} todos={todos}/>
      </td>
      </tr>
      </table>
      
    </div>
   </Context.Provider>
  )
}

export default App;
