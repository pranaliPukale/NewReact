import React from 'react'
const ChildCompFunction = () => {
     const Message=("Welcome");
    const  sendMessge=()=>{
       sendDataToParentComp(Message);     
   }
  return (
    <div>
      <>Child Component</>
      <button onClick={sendMessge}>Send message to Prent</button>
    </div>
  )
}
export default ChildCompFunction
