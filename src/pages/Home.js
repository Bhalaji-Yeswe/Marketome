import React,{useState} from 'react'

function Home() {
    const[counter,setcounter]=useState(0);
    return (
        <div className="home">
           <div className="headerContainer">
            <h1>Marketome</h1>
            <p className="update">{counter}</p>
            <button onClick={()=>setcounter(counter+1)}>ORDER NOW</button>   
            </div> 
        </div>
    )
}

export default Home
