import React from 'react'

function Navbar({filtervalue}) {
  return (
    <div>
        <a href="#" onClick={()=>filtervalue("all")}>All</a>
        <a href="#" onClick={()=>filtervalue("active")}>Active</a>
        <a href="#" onClick={()=>filtervalue("complete")}>Complete</a>
    </div>
  )
}

export default Navbar