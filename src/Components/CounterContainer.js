import React from 'react'
import './CounterContainer.css'
import { useState } from 'react'

function CounterContainer() {

    const [Number, setNumber] = useState(0)
    const [ColorValue, setColorValue] = useState('black')

    const verifyNumber = (num) => {
        if (num > 0) {
            setColorValue('green')
        } else if (num === 0) {
            setColorValue('black')
        } else {
            setColorValue('red')
        }
    }

    const handleIncrement = () => {
        let newNumber = Number + 1
        setNumber(newNumber)
        verifyNumber(newNumber)
    }

    const handleDecrement = () => {
        let newNumber = Number - 1
        setNumber(newNumber)
        verifyNumber(newNumber)
    }

    return (
        <>
            <div className="mainContainer">
                <div className="container">
                    <h1 >Counter App</h1>
                    <div className="CounterNumberContainer">
                        <h2 style={{ color: ColorValue }}>{Number}</h2>
                    </div>
                    <div className="buttonsContainer">
                        <button id='incrementButton' onClick={handleIncrement}>Increment</button>
                        <button id='decrementButton' onClick={handleDecrement}>Decrement</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterContainer