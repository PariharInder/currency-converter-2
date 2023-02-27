import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
      <img src={logo} alt="Currency Converter Logo" />
      <h2>Currency Converter</h2>
      </div>
      <div>
        <p>Convert:</p>
        <input type="number" name="amount" id="amount" />
        <select name="currency-1" id="currency-1"></select>
      </div>
      <div>
        <p>To:</p>
        <select name="currency-1" id="currency-1"></select>
      </div>
      <div>
        <h2>Result : </h2>
      </div>
    </div>
  )
}

export default App
