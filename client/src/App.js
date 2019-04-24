import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Search from './pages/Search'
import Saved from './components/Saved'

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Navbar />
          <Route exact path="/" component={Search} />
          <Route path="/saved" component={Saved} />
        </>
      </Switch>
    </Router>
  )
}

export default App
