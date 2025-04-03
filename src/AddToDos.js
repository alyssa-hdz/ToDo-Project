import React from "react";
import { useNavigate } from "react-router-dom";
import ToDosForm from "./ToDosForm";

function AddToDos({ onAdd }) {
  const navigate = useNavigate();

  function handleAdd(newToDos) {
    onAdd(newToDos);
    navigate("/");
  }

  return <ToDosForm initialData={{ title: "", description: "", status: false }} onSubmit={handleAdd} />;
}

export default AddToDos;