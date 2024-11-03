import React, { useState } from 'react'
import Form from './Form'
import Todo from './Todo'

const App = () => {
const [todos, settodos] = useState([
  {
  id:1,
  title : "This is a title-1",
  description : "this is a description-1"
},
{
  id:2,
  title : "This is a title-2",
  description : "this is a description-2"
},
{
  id:3,
  title : "This is a title-3",
  description : "this is a description-3"
}
])
const [id,setid] = useState()
const deletetodo = (id)=>{
  settodos(todos.filter((d)=> d.id !== id))
}
  return (
    <>
<div className="container">

  <h1 className='text-center'>React To Do List CRUD App</h1>
  <Form id={id} setid={setid} todos = {todos}  settodos ={settodos}/>
  <Todo todos={todos} deletetodo = {deletetodo} setid={setid} />
</div>
    </>
  )
}

export default App