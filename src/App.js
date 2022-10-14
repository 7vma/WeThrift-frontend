

import './dist/output.css';
import './App.css';
import { setUserToken, clearUserToken, getUserToken } from './utils/authToken'
import Header from './components/Header';
import Main from './components/Main';
import {useState} from 'react';
import React from 'react';
import'./index.css';
import './input.css'

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const signUp = props.signUp;
  const registerUser = async (data) => {
    try {

      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }

      const newUser = await fetch(
        "https://letsthrift-backend.herokuapp.com/auth/register",
        configs
      )

      const parsedUser = await newUser.json()
      console.log(parsedUser)

      // sets local storage
      setUserToken(parsedUser.token)
      // put the returned user object in state
      setCurrentUser(parsedUser.currentUser)
      // adds a boolean cast of the responses isLoggedIn prop
      setIsAuthenticated(parsedUser.loggedIn)

      // alternative (safer) implementation would be to use jwt decode library - <https://www.npmjs.com/package/jwt-decode>
      // this would also require reconfiguring our backend so we only send tokens with a signup

      return parsedUser
    } catch (err) {
      console.log(err)
      clearUserToken();
      setIsAuthenticated(false);
    }
  }


  
  const loginUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
      const response = await fetch(
        "https://letsthrift-backend.herokuapp.com/auth/login",
        configs
      )
      const user = await response.json()
      //console.log(user)

      // sets local storage
      setUserToken(user.token)
      // put the returned user object in state
      setCurrentUser(user.currentUser)
      // adds a boolean cast of the responses isLoggedIn prop
      setIsAuthenticated(user.loggedIn)

      return user
    } catch (err) {
      clearUserToken()
      setIsAuthenticated(false)
    }
  }


  return (
    <div className="App ">
    <Header user={currentUser}/>
    <Main isLoggedIn={isAuthenticated} signUp={registerUser} login={loginUser} user={currentUser} />
    {/* <img className='shoes' src="https://media0.giphy.com/media/TkCXXTLD8aRb9M18Gy/200w.gif?cid=82a1493b31ecy915cxy3lmgonmhm0h6e9hhbt9senav969m1&rid=200w.gif&ct=g"alt='sb dunks'/>
    <img className='shoes' src="https://media0.giphy.com/media/BpRh0HV5w2zMSBFYVv/200w.gif?cid=82a1493bdlei2rhfkyxus0njuktnfno96gy84jfgobalaxfl&rid=200w.gif&ct=g"alt='ozweego'/>
    <img className='shoes' src="https://media0.giphy.com/media/MbLooWnhG4Te2FoEOs/200w.gif?cid=82a1493b4s1o669077awwkiladfa6cutjkcomq639azotxul&rid=200w.gif&ct=g" alt='nike'/> */}
    </div>
  )
}

export default App;
