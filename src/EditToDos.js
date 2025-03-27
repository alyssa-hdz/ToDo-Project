import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ToDosForm from "./ToDosForm";

function EditToDos({ ToDos, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const toDoItem = ToDos.find((item) => item.id === parseInt(id));

  if (!toDoItem) return <p>ToDo not found</p>;

  function handleUpdate(updatedToDo) {
    onUpdate(updatedToDo);  
    navigate("/");          
  }

  return <ToDosForm initialData={toDoItem} onSubmit={handleUpdate} />;
}

export default EditToDos;