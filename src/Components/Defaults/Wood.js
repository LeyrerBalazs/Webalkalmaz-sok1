import React from 'react'
import "./Styles/Wood.css"
import { Link } from 'react-router-dom'

const Wood = () => {
  return (
    <>
        <div className="container2">
                <span><Link to="/">Trader</Link></span>
                <span className='Link'><Link to="/Wood">Wood Joke</Link></span>
        </div>
        <div className='box'>
            <h1>Ablak</h1>
            <p>-Mi az a speciális eszköz amivel átlátsz a betonfalon?<br />
            -???<br />
            -Ablak</p>
        </div>
        <div className='box'>
            <h1>A válás legfőbb oka</h1>
            <p>-Mi a legtöbb válás legfőbb oka?<br />
            -???<br />
            -A házasság</p>
        </div>
        <div className='box'>
            <h1>Nagy favicc</h1>
            <p>-Miaz? Feldobod zöld, leesik ugat?<br />
            -???<br />
            -Mindegy, csak kutyára essen!</p>
        </div>
        <div className='box'>
            <h1>Oltári favicc</h1>
            <p>-Mi az? Reggel ugat este úszik?<br />
            -???<br />
            -Az anyós műfogsora.</p>
        </div>
    </>
  )
}

export default Wood