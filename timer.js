import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

export const Timer = (props) => {
    const [milli, setMilli] = useState(0)
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const timeout = useRef(null)

    timeout.current = setTimeout(() => {
        if (milli == 59) {
            setMilli(0)
            setSecond(second + 1)
            if (second == 59) {
                setSecond(0)
                setMinute(minute + 1)
            }
        }
        else setMilli(milli + 1)
    }, 1000 / 60)

    const restart = () => {
        clearTimeout(timeout.current)
        setMilli(0)
        setSecond(0)
        setMinute(0)
    }
    
    return (
        <div style={{ margin: '10%' }}>
            <h1> My Timer</h1>
            <h2> {minute > 9 ? minute : '0' + minute}:{second > 9 ? second : '0' + second}:{milli}</h2>
            <br />
            <button onClick={restart}>restart</button>
        </div>
    )
}