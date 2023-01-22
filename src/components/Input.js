import '../App.css'
import { useState, useEffect } from 'react'

export default function Input({ setData }) {
  return (
    <div className="input">
      <div>
        <h4>Product</h4>
        <input />
      </div>
      <div>
        <h4>Amount of product</h4>
        <input />
      </div>
      <div>
        <h4>Protein</h4>
        <input />
      </div>
      <div>
        <h4>Period of storage</h4>
        <input />
      </div>

      <button onClick={setData}>send</button>
    </div>
  )
}
