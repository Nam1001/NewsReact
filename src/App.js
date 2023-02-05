import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News   from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
 
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      
      <div>
         <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      /> 
          <Routes>
            <Route excat path='/' element={<News setProgress={this.setProgress}  key='general' pageSize={6} country='in' category='general' />}></Route>
            <Route excat path='/business' element={<News setProgress={this.setProgress} key='business' pageSize={6} country='in' category='business' />}></Route>
            <Route excat path='/entertainment' element={<News setProgress={this.setProgress} key='entertainment' pageSize={6} country='in' category='entertainment' />}></Route>
            <Route excat path='/health' element={<News setProgress={this.setProgress} key='health' pageSize={6} country='in' category='health' />}></Route>
            <Route excat path='/science' element={<News setProgress={this.setProgress}  key='science' pageSize={6} country='in' category='science' />}></Route>
            <Route excat path='/sports' element={<News setProgress={this.setProgress}  key='sports' pageSize={6} country='in' category='sports' />}></Route>
            <Route excat path='/technology' element={<News setProgress={this.setProgress} key='technology' pageSize={6} country='in' category='technology' />}></Route>
            <Route excat path='/general' element={<News setProgress={this.setProgress} key='general' pageSize={6} country='in' category='general' />}></Route>
          </Routes>
        </Router>
      </div>
      </div>

    )
  }
}

