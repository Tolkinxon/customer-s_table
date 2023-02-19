import Input from './components/Input'
import Table from './components/Table'
import TableHead from './components/TableHead'
import TableBody from './components/TableBody'
import TableRow from './components/TableRow'
import Box from './components/Box'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [incr, setIncr] = useState(0)
  const [editData, setEditData] = useState({
    name: '',
    amount: '',
    protein: '',
    storage: '',
  })




  // ******** CREATE DATA BASE *********************
  const handleSubmit = (name, amount, protein, storage) => {
    const bodyData = { name, amount, protein, storage }

    setIncr((prev) => prev + 1)

    fetch('http://localhost:3001/item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    })

  }





  // ****************** EDIT DATA BASE ****************
  const edit = function (name, amount, protein, storage, id) {
    setEditData({ name, amount, protein, storage, id })
  }




  const editDataBase = (data, id) => {
  
    setIncr((prev) => prev + 1)

    fetch(`http://localhost:3001/item/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

  }





  // ***************** DELETE DATA BASE *****************
  const delee = (id) => {
    setIncr((prev) => prev + 1)

    fetch(`http://localhost:3001/item/${id}`, {
      method: 'DELETE',
    })
  }







  // ***************** GET REQUEST ****************
  useEffect(() => {

    
      fetch('http://localhost:3001/item')
      .then((data) => data.json())
      .then((data) => setData(data))

      fetch('http://localhost:3001/item')
      .then((data) => data.json())
      .then((data) => setData(data))
 
 
  }, [incr])





  useEffect(() => {

    console.log('render')
    fetch('http://localhost:30001item')
      .then((data) => data.json())
      .then((data) => setData(data))
  }, [])





  return (
    <>
      <Input setData={handleSubmit} editDataBase={editDataBase} editData={editData} />
      <div className="App">
        <Table>
          <TableHead>
            <div className='hrow'>
              <Box>Products</Box>
              <Box>Amount of products</Box>
              <Box>Protein</Box>
              <Box>Period of storage</Box>
            </div>
          </TableHead>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={row.id} id={idx}>
                <Box>{row.name}</Box>
                <Box>{row.amount}</Box>
                <Box>{row.protein}</Box>
                <Box>{row.storage}</Box>
                <button
                  onClick={() => {
                    edit(row.name, row.amount, row.protein, row.storage, row.id)
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    delee(row.id)
                  }}
                >
                  delete
                </button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default App
