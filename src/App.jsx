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

  // function putData(name, amount, protein, storage_period) {
  // bodyData = { ...{ name, amount, protein, storage_period }}
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIncr((prev) => prev + 1)

    const bodyData = {
      name: 'apple',
      amount: 200,
      protein: 0.4,
      storage_period: 6,
      id: 10
    }

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
      <Input />  

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
                <Box>{row.storage_period}</Box>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default App
