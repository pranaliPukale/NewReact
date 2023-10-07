import React from 'react'
import LeftHand from "./LeftHand"
import RightHand from './RightHand'
function MainScreen() {
  return (
    <div>
        <div style={{ color:"red"}}>
      <LeftHand/>
      </div>
      <div>
        <RightHand/>
      </div>
    </div>
  )
}

export default MainScreen
