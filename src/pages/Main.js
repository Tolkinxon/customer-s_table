import Input from '../components/Input'
import Table from '../components/Table'
import TableHead from '../components/TableHead'
import TableBody from '../components/TableBody'
import TableRow from '../components/TableRow'
import Box from '../components/Box'
import '../App.css'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { items } from '../reducer/provider'

function Main() {
  const [editData, setEditData] = useState({
    name: '',
    amount: '',
    protein: '',
    storage: '',
  })

  const { setData, data, setIncr, incr,  handleSubmit } = useContext(items)




  // ******** CREATE DATA BASE *********************
  // const handleSubmit = (name, amount, protein, storage) => {
  //   const bodyData = { name, amount, protein, storage }
  //   setIncr()
  //   fetch('http://localhost:3001/item', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(bodyData),
  //   })
  // }




  // ****************** EDIT DATA BASE ****************
  const edit = function (name, amount, protein, storage, id) {
    setEditData({ name, amount, protein, storage, id })
  }

  const editDataBase = (data, id) => {
    setIncr()

    fetch(`http://localhost:3001/item/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  // ***************** DELETE DATA BASE *****************
  const delee = (id) => {
    setIncr()

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
    fetch('http://localhost:3001/item')
      .then((data) => data.json())
      .then((data) => setData(data))
  }, [])

  return (
    <>
      <div className="App">
        <Table>
          <TableHead>
            <div className="hrow">
              <Box className="id">ID</Box>
              <Box>Products</Box>
              <Box>Amount of products</Box>
              <Box>Protein</Box>
              <Box>Period of storage</Box>
            </div>
          </TableHead>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={row.id} id={idx}>
                <Box className="id">{idx + 1}</Box>
                <Box>{row.name}</Box>
                <Box>{row.amount}</Box>
                <Box>{row.protein}</Box>
                <Box>{row.storage}</Box>
                {/* <button
                  onClick={() => {
                    edit(row.name, row.amount, row.protein, row.storage, row.id)
                  }}
                >
                  edit
                </button> */}
                <button
                  onClick={() => {
                    delee(row.id)
                  }}
                  className="btn"
                >
                  delete
                </button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <Input
        setData={handleSubmit}
      />

      </div>
    </>
  )
}

export default Main
