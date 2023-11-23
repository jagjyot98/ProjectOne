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
            throw new Error("An error occurred. Please try again later.");
          }
        })
        .catch((error) => {
          console.error("Error fetching courses:", error);
          throw error; // Re-throw the error to be handled at the component level
        });
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
   