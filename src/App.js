import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import Table from './table'
import Navbar from './navbar'
import './app.css'

function App() {
    const [filterstate,setfilterstate] = useState("all")
    const [inputvalue,setinputvalue] = useState("")
    const [data,setdata] = useState([])
   const [values,setvalues] = useState({
       task:""
   })
   const onchangevalue = (event) => {
       event.preventDefault()

       const fieldname = event.target.getAttribute('name')
       const fieldvalue = event.target.value
        setinputvalue(fieldvalue)
        const newarray = {...values}
        newarray[fieldname] = fieldvalue
        setvalues(newarray)
   }
   const onsubmitform = (event) => {
       event.preventDefault()

       const newarr = {
           task:values.task,
           id:nanoid(),
           done:false
       }
       const finalarr = [...data,newarr]
       setdata(finalarr)
       setinputvalue("")
   }
   const change = (e,item) => {
    const index = data.findIndex(list => list.id == item.id)
    const indexarr = data[index]
    const newarr = {...indexarr,task:item.task,id:item.id,done:e.target.checked}
    data[index] = newarr
    setdata(data)
}
const filtervalue = (result) => {
    setfilterstate(result)   
}
const finaldata = () =>{
    if(filterstate == "active"){
        const senddata = data.filter(item => item.done == false)
        return senddata
    }
    else if (filterstate == "complete"){
        const senddata = data.filter(item => item.done == true)
        return senddata
    }
    return data
}
const deletehandle = (item) => {
    const newdata = data.filter(lists => lists.id != item.id)    
    setdata(newdata)
}
  return (
    <div className='main'>
        <form onSubmit={onsubmitform}>
            <input type='text' placeholder='Enter a Name' value={inputvalue} required="required" name="task" onChange={onchangevalue} className="inputfield" maxLength={"100"} /> 
            {/* <button>Submit</button> */}
        </form>
        <Navbar filtervalue={filtervalue}/>
        <Table  finaldata={finaldata} change={change} deletehandle={deletehandle}/>
    </div>
  )
}

export default App