import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const Form = ({ settodos,todos,id,setid }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const handleSubmit = (e)=>{
  e.preventDefault()

 

if(id){
  updatebyid(id)
  setid("")
}else{
  const obj = {
    id : Math.random(),
    title,
    description
  }
  settodos([...todos,obj])
}

 setid("")
  settitle("")
  setdescription("")
  }

useEffect(() => {
 if(id){
  const updatedData = todos.filter((d)=>d.id == id)
   settitle(updatedData[0].title)
   setdescription(updatedData[0].description)
 } 

}, [id])

const updatebyid = (id) =>{
  const obj = {
    title,
    description,
  }
  settodos((prevData)=>
  prevData.map((todo)=>todo.id === id ? {...todo,...obj}:todo))
}

  return (
    <>
     <form onSubmit={handleSubmit}>
     <div
        className="container my-5 text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input className="mx-2" value={title} onChange={(e)=> settitle(e.target.value)}  placeholder="Titile" type="text" />
        <input className="mx-2" value={description} onChange={(e)=> setdescription(e.target.value)} 
        placeholder="Description" type="text" />
        {
          id &&( <button className="btn btn-warning">Edit</button>)
        }
        {
          !id &&( <button className="btn btn-warning">Add</button>)
        }
       
      </div>
     </form>
    </>
  );
};

export default Form;
