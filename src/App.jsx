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
 

  const handleSubmit = (name, amount, protein, storage) => {
    const bodyData = {name, amount, protein, storage}

    setIncr((prev) => prev + 1)

    fetch('http://localhost:8000/item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
      })
  }

  useEffect(() => {
    console.log('render')
    fetch('http://localhost:8000/item')
      .then((data) => data.json())
      .then((data) => setData(data))
  }, [incr])

  return (
    <>
      <Input setData={handleSubmit} />  
      <div className="App">
        <Table>
          <TableHead>
            <TableRow>
              <Box>Products</Box>
              <Box>Amount of products</Box>
              <Box>Protein</Box>
              <Box>Period of storage</Box>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={row.id} id={idx}>
                <Box>{row.name}</Box>
                <Box>{row.amount}</Box>
                <Box>{row.protein}</Box>
                <Box>{row.storage}</Box>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default App
