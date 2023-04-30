// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  function getTogglerProps({onClick, ...props}) {
    return {
      'aria-pressed': on,
      onClick: () => {
        toggle?.()
        onClick?.()
      },
      ...props,
    }
  }

  return {
    on,
    toggle,
    getTogglerProps,
  }
}

function App() {
  const {on, getTogglerProps} = useToggle()

  console.log(
    getTogglerProps({
      'aria-label': 'custom-button',
      onClick: () => {
        console.info('onButtonClick')
      },
      id: 'custom-button-id',
    }),
  )

  console.log(getTogglerProps({on}))

  return (
    <div>
      <Switch on={on} {...getTogglerProps({on})} />
      <hr />
      <button
        {...getTogglerProps({
          'aria-label': 'custom-button',
          onClick: () => {
            console.info('onButtonClick')
          },
          id: 'custom-button-id',
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
