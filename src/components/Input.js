import '../App.css'
import { useState, useEffect } from 'react'

export default function Input({ setData }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [protein, setProtein] = useState('')
  const [storage, setStorage] = useState('')

  const datas = (e) => {
   e.target.name == 'name' ? setName(e.target.value) :
   e.target.name == 'amount' ? setAmount(e.target.value):
   e.target.name == 'protein' ? setProtein(e.target.value):
   setStorage(e.target.value)
  }

  

  return (
    <div className="input">
      <div>
        <h4>Product</h4>
        <input name="name" type="text" value={name} onChange={datas} />
      </div>
      <div>
        <h4>Amount of product</h4>
        <input name="amount" type="text" value={amount} onChange={datas} />
      </div>
      <div>
        <h4>Protein</h4>
        <input name="protein" type="text" value={protein} onChange={datas} />
      </div>
      <div>
        <h4>Period of storage</h4>
        <input name="storage" type="text" value={storage} onChange={datas} />
      </div>

      <button onClick={() => setData(name, amount, protein, storage)}>send</button>
    </div>
  )
}
