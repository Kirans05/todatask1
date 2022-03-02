import React, { useState } from 'react'
import './table.css'


function Table({change,finaldata,deletehandle}) {
    const data = finaldata()
    const [cname,setcname] = useState(false)
    const valueschang = (e) =>{
        setcname(e.target.checked)
    }
  return (
    <div>
        <table border="1" >
            <thead className='thead-dark'>
                <tr className='table-success tr'>
                    <th>
                        checkbox
                    </th>
                    <th>
                        Task
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
            {
            data.map((item,index) => {
                return (
                    <tr key={index} className='tr'>
                        <td className='tdcheckbox'>
                            <input type="checkbox" onChange={(e)=>change(e,item)} onClick={(e)=>valueschang(e)} className="checkbox" checked={item.done}/>
                        </td>
                        <td>
                        <small style={{textDecoration:(item.done?"line-through":"")}}>{item.task}</small>
                        </td>
                        <td>
                            <button onClick={()=>deletehandle(item)} className={"btn btn-primary"}>X</button>
                        </td>
                    </tr>
                )
            })
        }
            </tbody>
        </table>
        
    </div>
  )
}

export default Table