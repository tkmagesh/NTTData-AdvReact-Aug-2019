import React from 'react';
import * as _ from 'underscore';

var currentId = 2;

const initialTodos = [
  {
    id: 1,
    task: 'Learn React',
    complete: false,
  },
  {
    id: 2,
    task: 'Learn Firebase',
    complete: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case 'ADD_NEW':
      return [...state, action.payload];
    default:
      return state;
  }
};

console.dir(_);


const App = () => {
  const [todos, dispatch] = React.useReducer(
    todoReducer,
    initialTodos
  );

  console.log(todos === initialTodos);

  const [newToDoTask, setNewToDoTask] = React.useState('');

  const handleChange = React.useCallback(todo => {
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  });

  const onTxtChange = _.throttle(value => {   
    setNewToDoTask(value)
  }, 500, {leading : false} );

  const handleAddClick = () => {
    let newToDo = {
      id : ++currentId,
      task : newToDoTask,
      complete : false
    };
    dispatch({
      type : 'ADD_NEW',
      payload : newToDo
    });
  }

  return (
    <>
    <input type="text" onChange={(evt) => onTxtChange(evt.target.value)} />
    <input type="button" onClick={handleAddClick} value="Add New"/>
    <ul>
      {todos.map(todo => (
        <Todo data={todo} {...{handleChange}} key={todo.id}/>
      ))}
    </ul>
    </>
  );
};

let Todo = React.memo(({data : todo, handleChange}) => {
  console.log(todo.task + ' updated');
  return (
      <li >
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={handleChange}
            />
            {JSON.stringify(todo)}
          </label>
        </li>
    )
});



export default App;
