import '../App.css'
import { useState, useEffect } from 'react'

export default function Input({ setData, editDataBase, editData }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [protein, setProtein] = useState('')
  const [storage, setStorage] = useState('')

  const datas = (e) => {
    e.target.name == 'name'
      ? setName(e.target.value)
      : e.target.name == 'amount'
      ? setAmount(e.target.value)
      : e.target.name == 'protein'
      ? setProtein(e.target.value)
      : setStorage(e.target.value)
  }

  useEffect(() => {
    setName('')
    setAmount('')
    setProtein('')
    setStorage('')
  }, [setData])


  // useEffect(() => {
  //   setName(editData.name)
  //   setAmount(editData.amount)
  //   setProtein(editData.protein)
  //   setStorage(editData.storage)
  // }, [editData])

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

      {/* <button onClick={() => editDataBase({ name, amount, protein, storage }, editData.id)}>
        save
      </button> */}
      <button onClick={() => setData(name, amount, protein, storage)}>
        send
      </button>
    </div>
  )
}
