import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/homepage/Home'
import Development from './components/development/Development'
import Design from './components/design/Design'
import Cv from './components/cv/Cv'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/development" component={Development} />
        <Route exact path="/design" component={Design} />
        <Route exact path="/curriculum-vitae" component={Cv} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
