import Table from './Table'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import Box from './Box'
import './App.css'

function App() {
  function createData(name, amount, protein, storage_period, id) {
    return { name, amount, protein, storage_period, id}
  }

  const rows = [
    createData('apple', 200, 0.4, 6, 0),
    createData('cherry', 500, 0.9, 4, 1),
    createData('banana', 100, 5.9, 3, 0),
    createData('potatoes', 300, 9.7, 3, 1),
  ]

  return (
    <div className="App">
      <Table>
        <TableHead>
          <TableRow>
            <Box>Products</Box>
            <Box>Amount of products</Box>
            <Box>Protein</Box>
            <Box>Storage of period</Box>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
          <TableRow key={row.name} id={row.id} >
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
