import React, { useState } from 'react';
import axios, { Axios } from 'axios';

function courseFetchSpecific(id) 
{
    const inpval = { courseID: id };

        // console.log(inpval);
    
    return axios.post("http://localhost:5000/www/ProjectOne/BackEnd/courseFetchSpecific.php", inpval)
    .then((response) => {

        if (response.data['status'] === 'success') {
            return response.data.data;
          } else {
            throw new Error(response.data['status'] + "An error occurred. Please try again later.");
          }
        })
    }
    export default courseFetchSpecific;
      // console.log(response);
      //   if (response.data['status'] === 'success') {
    //   console.log(response.data.data);
      // console.log()
      // navigate('/dashboard');
      //   } else if (response.data['status'] === 'empty') {
      //     alert("Video Failed!");
      //   } 
      // else {
      //   alert("An error occurred. Please try again later.");
      // }
    //   return response.data.data;
   