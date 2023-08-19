import React from 'react';
import { Link, useNavigate  } from "react-router-dom";
// import SignUp from './signup';
import '../App.css';
import axios, {Axios} from 'axios';
import { useState } from 'react';
import DashboardPage from '../Home';
import inspectComp from './InspectComp';


function AdminLogin({ inp }){
  // const navigate = useNavigate();
    // const verifyUser = () => {
        axios.post("http://localhost:5000/www/ProjectOne/Backend/adlog.php", inp)
        .then((response) => {

          console.log(response);
          
          if (response.data['status'] === 'success') {
            alert("Admin Login success !");
            // navigate('/dashboard');
          } else if (response.data.status === 'fail') {
            alert("Admin Invalid Credentials!");
          } else {
            alert("An error 1 occurred. Please try again later.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error 2 occurred. Please try again later.");
        });
}
export default AdminLogin;