import './App.css';
import { useState, } from 'react';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListToDos from './ListToDos';  
import AddToDos from './AddToDos';     
import EditToDo from './EditToDos';  
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

 


 const initialState ={
  ToDos: [
    { id: 1, title: "Workout", description: "30min HIT workout", status: true },
    { id: 2, title: "Meal Prep", description: "Grocery Shopping", status: true }
  ]};

    // 🔥 Reducer - Only manages state, doesn't handle methods directly
const reducer = (state = initialState, action) => {
  switch(action.type) {
      case 'SET_TODOS':
          return { ...state, ToDos: action.payload };
      default:
          return state;
  }
};
// 🔥 Create Redux Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
function App() {
  const [ToDos, setToDo] = useState(store.getState().ToDos);

  function deleteToDos(id) {
    const updatedToDos = ToDos.filter((ToDo) => ToDo.id !== id);
    setToDo(updatedToDos);
    store.dispatch({ type: "SET_TODOS", payload: updatedToDos });
  }

  function addToDos(ToDo) {
    const newToDo = { ...ToDo, id: Date.now() };
    console.log("New ToDo:", newToDo);
    setToDo([...ToDos,newToDo]);
    store.dispatch({ type: "SET_TODOS", payload: [...ToDos, newToDo] });
  }

  function updateToDo(updated) {
    const updatedToDos = ToDos.map((ToDo) =>
      ToDo.id === updated.id ? updated : ToDo
    );
    setToDo(updatedToDos);
    store.dispatch({ type: "SET_TODOS", payload: updatedToDos });
  } 

  function toggleComplete(id) {
    const updatedToDos = ToDos.map((ToDo) =>
      ToDo.id === id ? { ...ToDo, status: !ToDo.status } : ToDo
    );
    setToDo(updatedToDos);
    store.dispatch({ type: "SET_TODOS", payload: updatedToDos });
  }
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <ListToDos
                ToDos={ToDos}
                onDelete={deleteToDos}
                onToggleComplete={toggleComplete}
              />
            }
          />
          <Route path="/add" element={<AddToDos onAdd={addToDos} />} />
     
          <Route
            path="/edit/:id"
            element={<EditToDo ToDos={ToDos} onUpdate={updateToDo} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

 