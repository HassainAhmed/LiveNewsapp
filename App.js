
import Api from "./Api";
import NewNav from "./NewNav";
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
Routes,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NewNav />
        
          <Routes>
<Route path='/' element={<Api key='general' pageSize={12} Country='in' Category='general' />}></Route>
  <Route path='/entertainment' element={<Api key='entertainment' pageSize={12} Country='' Category='entertainment' />}></Route>
<Route path='/health' element={<Api key='health' pageSize={12} Country='in' Category='health' />}></Route>
<Route path='/science' element={<Api key='science' pageSize={12} Country='in' Category='science' />}></Route>
 <Route path='/sports' element={<Api key='sports' pageSize={12} Country='in' Category='sports' />}></Route>
            <Route path='/technology' element={<Api key='technology' pageSize={12} Country='in' Category='technology' />}></Route>
          </Routes>
        </Router>
  
      </div>
    )
  }
}

