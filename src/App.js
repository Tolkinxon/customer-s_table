import Table from './components/Table'
import TableHead from './components/TableHead'
import TableBody from './components/TableBody'
import TableRow from './components/TableRow'
import Box from './components/Box'
import './App.css'

function App() {
  function createData(name, amount, protein, storage_period, id) {
    return { name, amount, protein, storage_period, id }
  }

  const rows = [
    createData('apple', 200, 0.4, 6),
    createData('cherry', 500, 0.9, 4),
    createData('banana', 100, 5.9, 3),
    createData('potatoes', 300, 9.7, 3),
    createData('carrot', 780, 2.5, 1),
    createData('pie', 240, 9.4, 5),
    createData('tea', 350, 2.7, 3),
    createData('rice', 180, 9.9, 65),
    createData('cabbage', 144, 9.6, 39),
    createData('onion', 670, 89, 35),
  ]

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
          {rows.map((row, idx) => (
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
