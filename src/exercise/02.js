// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 📜 https://reactjs.org/docs/react-api.html#reactchildren
  // 📜 https://reactjs.org/docs/react-api.html#cloneelement

  // console.log(children)

  return React.Children.map(children, child => {
    // console.log(child)
    return typeof child.type === 'string' // ignore passing of props to composite component
      ? child
      : React.cloneElement(child, {
          on,
          toggle,
        })
  })
}

const ToggleOn = ({on, children}) => (on ? children : null)
const ToggleOff = ({on, children}) => (!on ? children : null)
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>hello world</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
