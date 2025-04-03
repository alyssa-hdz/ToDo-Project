import {Link} from "react-router-dom";
import React, { useState } from 'react';

function ListToDos({ToDos , onDelete, onToggleComplete})
{
  const [filterStatus , setFilterStatus] = useState('All');

 
  // const filteredToDos = ToDos.filter(toDo=> {
  // });
  const filteredToDos = ToDos.filter(toDo => {
    return (filterStatus == 'All' || (filterStatus == 'Completed' && toDo.status) || (filterStatus == 'Incomplete' && !toDo.status))
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
          <table className="table table-bordered ">
            <thead className="table-dark">
              <tr>
                <th class="label">Title</th>
                <th class="label">Description</th>
                <th class="label">Status</th>
                <th class="label">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredToDos.map((toDo) => (
                <tr key={toDo.id}>
                  <td>{toDo.title}</td>
                  <td>{toDo.description}</td>
                  <td>{toDo.status == true ? 'Completed' : 'Incompleted'}</td>
                
                  <td>
                    <button className={`btn btn-${toDo ? 'success' :'warning'}btn-sm me-2`}
                    onClick ={()=> onToggleComplete(toDo.id)}>
                      {toDo.status ? 'Mark Incomplete': 'Mark Complete'}
                      </button>
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