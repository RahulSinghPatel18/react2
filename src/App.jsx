// import React, {useState} from "react";

import { useState } from "react"

const App = ()=>{
const [time, settime] = useState(new Date().toLocaleTimeString())

setInterval(()=>{
  settimeout(new Date().toLocaleTimeString())
},1000)

  return(
    <>
    <h1>Your Current Time is :{time}</h1>

<button>Update</button>   
 
    </>
  )
}


export default App