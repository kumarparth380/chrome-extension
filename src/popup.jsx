import React from 'react'
import { render } from 'react-dom'

const Popup = () => {
    return (
        <div>
            <h1>Hello, world!</h1>
            <p>This is a sample popup!</p>
        </div>
    )
}

render(<Popup />, document.getElementById("root"))