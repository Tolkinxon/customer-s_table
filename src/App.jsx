import Table from './components/Table'
import TableHead from './components/TableHead'
import TableBody from './components/TableBody'
import TableRow from './components/TableRow'
import Box from './components/Box'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect( async () => {
  await fetch('http://localhost:8000/item')
      .then((data) => data.json())
      .then((data) => setData(data))
  }, [])

  return (
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
            <TableRow key={row.name} id={idx}>
              <Box>{row.name}</Box>
              <Box>{row.amount}</Box>
              <Box>{row.protein}</Box>
              <Box>{row.storage_period}</Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default App
