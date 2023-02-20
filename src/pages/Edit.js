import React from 'react'
import { useContext } from 'react'
import { items } from '../reducer/provider'
import Table from '../components/Table'
import TableHead from '../components/TableHead'
import TableBody from '../components/TableBody'
import TableRow from '../components/TableRow'
import Box from '../components/Box'
import '../App.css'
import { useState, useEffect } from 'react'

const Edit = () => {
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

  const { data } = useContext(items)
  return (
    <div>
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
              <Box>
                <input name="name" type="text" value={name} onChange={datas} />

              </Box>
              <Box>{row.amount}</Box>
              <Box>{row.protein}</Box>
              <Box>{row.storage}</Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Edit
