import React from 'react'
import Main from './pages/Main'
import Add from './pages/Add'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/add' component={Add}/>
      </Switch>
    
    </>
  )
}

export default App