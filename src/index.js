import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import HomePage from './Home';
import LoginPage from './LoginNsignup/LoginPage';
import SignupPage from './LoginNsignup/SignupPage';
import NavigationBar from './NavigationBar';
import reportWebVitals from './reportWebVitals';
import Courses from './Courses';
import VideoPage from './VideoPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/sign' element={<SignupPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/' element={<NavigationBar/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/course' element={<Courses/>}></Route>
      <Route path='/video' element={<VideoPage/>}></Route>
      {/* <Route path='/update' element={<Update/>}></Route>
      <Route path='/delete' element={<Delete/>}></Route> */}
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
