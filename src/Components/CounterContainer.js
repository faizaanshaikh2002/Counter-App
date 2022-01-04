import React from 'react'
import './CounterContainer.css'

export default function counterContainer() {
    return (
        <div className="mainContainer">
            <div className="container">
                <h1 >Counter App</h1>
                <div className="CounterNumberContainer">
                    <h2>0</h2>
                </div>
                <div className="buttonsContainer">
                    <button id='incrementButton'>Increment</button>
                    <button id='decrementButton'>Decrement</button>
                </div>
            </div>
        </div>
    )
}
