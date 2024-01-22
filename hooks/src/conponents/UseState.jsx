// import { useState } from "react";
// import "../App.css"

// function UseState(){
//   const [currAge,setAge] = useState(19);
  
//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <button onClick={handleAge}>Get Older</button>
//     </div>
//   );
// }

// export default UseState;

// import { useState } from "react";
// import "../App.css"

// function UseState(){
//   const [currAge,setAge] = useState(19);
//   const [currSib, setSib] = useState(1);
  
//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   const handleSib = ()=>{
//     setSib(currSib+1);
//   }


//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={handleAge}>Get Older</button>
//       <button onClick={handleSib}>Get more Sib</button>
//     </div>
//   );
// }

// export default UseState;

import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./context";

function Content() {
    let [count, setCount] = useState(0);
    let [displayContent, setDisplayContent] = useState(true)
    let {theme, setTheme} = useContext(MyContext)

    useEffect(() => {
        alert("Content Button Is Clicked")
    }, [displayContent])

    function changeTheme() {
        setTheme(theme => theme ? false : true)
    }

    function changeContent() {
        setDisplayContent(displayContent => displayContent ? false : true)
    }


  return (
    <>
      <button onClick={changeTheme}>Toggle</button>
      <div style={{
        width:"50vw",
        padding:"10px",
        margin:'20px',
        backgroundColor: theme ? "black" : "grey",
        color:"white"
        }}>
        <p style={{
          display:displayContent?"block":'none'  
        }}> 
          Maecenas a pellentesque est, quis accumsan mi. Praesent imperdiet dapibus purus et semper. Nulla pellentesque libero accumsan nunc vulputate, eget vehicula dui cursus. Mauris ut mauris orci. Phasellus tincidunt a ante quis hendrerit. Maecenas consequat libero vitae venenatis consectetur. Quisque sollicitudin in elit sed dapibus. Aenean tincidunt magna sapien, at condimentum nulla dictum eget. Pellentesque quis sapien a dui hendrerit accumsan. Pellentesque quis lacinia augue. Etiam molestie nulla sed augue interdum lobortis.
        </p>
        <button onClick={changeContent}>Content</button>
        <h3>{count}</h3>
        <button onClick={() => setCount(count => count+1)}>Like</button>
      </div>
    </>
  );
}

export default Content;