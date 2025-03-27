import './App.css';
import { useState } from 'react';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListToDos from './ListToDos';  
import AddToDo from './AddToDos';     
import EditToDo from './EditToDos';  
 

function App() {
  const [ToDos, setToDos] = useState([
    { id: 1, title: "Workout", description: "30min hit workout", status: "completed" }
  ]);

  function deleteToDo(id) {
    setToDos(ToDos.filter((ToDo) => ToDo.id !== id));
  }

  function addToDo(ToDo) {
    const newToDo = { ...ToDo, id: Date.now() };  
    setToDos([...ToDos, newToDo]);
  }

  function updateToDo(updated) {
    setToDos(ToDos.map((ToDo) => (ToDo.id === updated.id ? updated : ToDo)));
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ListToDos ToDos={ToDos} onDelete={deleteToDo} />} />
          <Route path="/add" element={<AddToDo onAdd={addToDo} />} />
          <Route path="/edit/:id" element={<EditToDo ToDos={ToDos} onUpdate={updateToDo} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;