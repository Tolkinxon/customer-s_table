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
import Input2 from '../components/Input2'

const Edit = () => {
  const { data } = useContext(items)
  const [data2, setData2] = useState([])

  useEffect(() => {
    setData2(data)
  }, [])



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
          {data2.map((row, idx) => (
              <Input2 item={row} id={idx} key={row.id}/>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


export default Edit
