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
        <h4>Amount of products</h4>
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

      <button onClick={setData}>POST</button>
    </div>
  )
}
