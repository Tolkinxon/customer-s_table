import '../App.css'
import { useState, useEffect } from 'react'
import Box from './Box'
import TableRow from './TableRow'

export default function Input2({ item, id }) {
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
    setName(item.name)
    setAmount(item.amount)
    setProtein(item.protein)
    setStorage(item.storage)
  }, [item])


  if(id % 2 == 1){
    id = 1
  }
  else{
    id = 0
  }  

  return (
    <TableRow key={id} id={id}>
      <Box>{id + 1}</Box>
      <Box>
        <input 
          name="name" 
          type="text"
          value={name} 
          onChange={datas} className="inp"    
          style={{ backgroundColor: id === 0 ? '#eeeeee ' : 'white' }}/>
      </Box>
      <Box>
        <input 
          name="amount" 
          type="text" value={amount} 
          onChange={datas}  className="inp"  
          style={{ backgroundColor: id === 0 ? '#eeeeee ' : 'white' }}/>
      </Box>
      <Box>
        <input 
          name="protein" 
          type="text" 
          value={protein} 
          onChange={datas}  
          className="inp"  
          style={{ backgroundColor: id === 0 ? '#eeeeee ' : 'white' }}/>
      </Box>
      <Box>
        <input 
          name="storage" 
          type="text" 
          value={storage} 
          onChange={datas}  
          className="inp"  
          style={{ backgroundColor: id === 0 ? '#eeeeee ' : 'white' }}/>
      </Box>
      <div className='spare'></div>

      <button onClick={() => editDataBase({ name, amount, protein, storage }, editData.id)}>
        save
      </button> 
    </TableRow>
  )
}
