import React from 'react'
import Input from '../components/Input'
import { useContext } from 'react'
import { items } from '../reducer/provider'


const Add = () => {

  const { handleSubmit } = useContext(items)





  return (
    <div>
           <Input
        setData={handleSubmit}
        // editDataBase={editDataBase}
        // editData={editData}
      />


    </div>
  )
}

export default Add