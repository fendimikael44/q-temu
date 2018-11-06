import React, { Component } from 'react'
// import axios from 'axios'
import AppBar from './Component/AppBar'
import Home from './Pages/Home'
import About from './Pages/About'
import MemberDetail from './Pages/Member'
import Footer from './Component/Footer'
import './App.css'
import {  BrowserRouter as Router,  Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import myStore from './Config/store'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      members: [],
      pastMeetUps: [],
    }
  }

  async componentDidMount() {
    // await axios
    //   .get("https://swapi.co/api/people")
    //   .then(response => response.data.results)
    //   .then(member => this.setState({
    //     members: member.slice(0, 3).map(row => ({
    //       name: row.name,
    //       other: row.mass
    //     }))
    //   }))
    
    // await axios
    //   .get("https://swapi.co/api/films")
    //   .then(response => response.data.results)
    //   .then(films => this.setState({
    //     pastMeetUps: films.slice(0, 3).map(row => ({
    //       title: row.title,
    //       content: row.opening_crawl,
    //       went: row.characters.length
    //     }))
    //   }))
  }

  render() {
    // const { pastMeetUps } = this.state
    return (
      <Provider store={myStore} >
        <div className="App">
              <Router>
                <div>
                  <AppBar />
                  <Route exact path="/" render={()=> (
                    <Home />
                  )} />
                  <Route path="/member/:id" component={MemberDetail} />
                  <Route path="/about" component={About} />
                </div>
              </Router>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
