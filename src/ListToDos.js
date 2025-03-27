import {Link} from "react-router-dom";
import React, { useState } from 'react';

function ListToDos({ToDos , onDelete})
{
  const [filterStatus , setFilterStatus] = useState('All');

 
  const filteredToDos = ToDos.filter(toDo=> {
  });

    return (
      <div>
        <div className= "mb-2 mt-2 col-3">
          <select className="form-select" onChange={(e) => setFilterStatus(e.target.value)}>
              <option value='All'>All</option>
              <option value='Completed'>Completed</option>
              <option value='Incomplete'>Incompleted</option>

          </select>
        </div>
        <div className="table-responsive mt-4">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredToDos.map((toDo) => (
                <tr key={toDo.id}>
                  <td>{toDo.title}</td>
                  <td>{toDo.description}</td>
                  <td>{toDo.status == true ? 'Completed' : 'Incompleted'}</td>
                
                  <td>
                    <Link className="btn btn-warning btn-sm me-2" to={`/edit/${toDo.id}`}>Edit</Link>
                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(toDo.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
         </div>
      );
}

export default ListToDos;