import React, { useState } from 'react';
import "./App.css"

const App = () => {
  let[run1,setRun1]=useState(0);
  let[wicket,setWicket]=useState(0);
  let[display,setDisplay]=useState("")
  let[overs,setOvers]=useState(0);
  let[bat,setBat]=useState(0);
  let[bowl,setBowl]=useState(1);
   

  
  let b=0;

  
  let run=(event)=>{
    let a=((event.target.value))
    // console.log(a);
    b+=Number(a);
    setRun1(Number(run1)+b)

    setDisplay(a+" | "+display)
    
    setBowl(bowl+1)
    if(bowl>5){
    setBat(bat+1)
    setBowl(1)
    }
    
    setOvers(`${bat}.${bowl}`) 
     
}
  
  let run2=(event)=>{
    let a=Number((event.target.value))
    
    
    setWicket(Number(wicket)+a)
    setDisplay(`Out | ${display}  `)
    setBowl(bowl+1)
    if(bowl>5){
    setBat(bat+1)
    setBowl(1)
    }
    
    setOvers(`${bat}.${bowl}`) 
  }
  
  let run3=(event)=>{
    let a=((event.target.value))
    setDisplay(a+" | "+display)
    setRun1(run1+1)
  }
  

  
  
  return (
    <>
    <h1>Scoreboard</h1>
    {/* <div class="main"> */}
    <h2>Score </h2>
    <input class="int" type="text" value={run1}/>
    <br />
    <h2> Wickets</h2>
    <input class="int" type="text" value={wicket} />
    <br />
    <h2>Overs</h2>
     <input class="int" type="text" value={overs} />
    <br />
    <h2> Display</h2>
    <input type="text" value={display} style={{width:"90%"}} />
    <br />
    {/* </div> */}
    
    <div className='btn'>
    <button value={0} onClick={run}>0</button>
    <button value={1} onClick={run}>1</button>
    <button value={2} onClick={run}>2</button>
    <button  value={3} onClick={run}>3</button>
    <button value={4} onClick={run}>4</button>
    <button value={5} onClick={run}>5</button>
    <button value={6 }onClick={run}>6</button>
    <button value={1} onClick={run2}>Out</button>
    <button value="Wide" onClick={run3}>Wide</button>
    <button value="NoBall" onClick={run3}>NoBall</button>
    </div>
    
    
    



    </>
  )
}

export default App
