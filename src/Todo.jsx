import React from "react";

const Todo = ({ todos,deletetodo,setid }) => {
  return (
    <>
      <div className="container text-center">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {todos.map((d) => {
            return (
              <>
                <tbody key={d.id}>
                  <tr>
                    <td>{d.title}</td>
                    <td>{d.description}</td>
                    <td>
                      <button onClick={()=>setid(d.id)} className="btn btn-warning mx-3">Edit</button>
                      <button onClick={()=>deletetodo(d.id)} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Todo;
