import logo from './full_logo.png'

import './App.css';
import StudioCards from './containers/StudioCards'
import StudioPage from './components/StudioPage'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setStudios } from './redux/actions'
import { Switch, Route } from 'react-router-dom'


class App extends Component  {

  componentDidMount(){
    this.props.setStudios()
  }

  render(){
    return (
      <>
        <img src={logo} alt="Lab Locator" height="60px"/>
        <Switch>
          <Route exact path="/studios/:id" component={StudioPage} />
          <Route exact path="/studios" component={StudioCards}/>
        </Switch>
      </>
    );
  }
}

export default connect(null, { setStudios })(App);