import logo from './full_logo.png'

import './App.css';
import StudioCards from './containers/StudioCards'
import StudioPage from './components/StudioPage'
import Login from './components/Login'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setStudios } from './redux/studioActions'
import { Switch, Route } from 'react-router-dom'


class App extends Component  {

  componentDidMount(){
    this.props.setStudios()
  }

  render(){
    return (
      <>
        <img className="logo" src={logo} alt="Lab Locator"/>
        {this.props.user.id
        ?
          <Switch>
            <Route exact path="/studios/:id" component={StudioPage} />
            <Route exact path="/studios" component={StudioCards}/>
          </Switch>
        :
          <Login/>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user })

export default connect(mapStateToProps, { setStudios })(App);