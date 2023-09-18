import axios from 'axios';

function courseFetch() {
  return axios.post("http://localhost:5000/www/ProjectOne/BackEnd/courseFetch.php")
    .then((response) => {
      return response.data.data; // Return the actual course data
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
      throw error; // Re-throw the error to be handled at the component level
    });
}

export default courseFetch;


// import React from 'react';
// import axios, { Axios } from 'axios';

// function courseFetch() 
// {
//   axios.post("http://localhost:5000/www/ProjectOne/BackEnd/courseFetch.php")//, inpval)
//     .then((response) => {

//       // console.log(response);
//       //   if (response.data['status'] === 'success') {
//       console.log(response.data.data);
//       // console.log()
//       // navigate('/dashboard');
//       //   } else if (response.data['status'] === 'empty') {
//       //     alert("Video Failed!");
//       //   } 
//       // else {
//       //   alert("An error occurred. Please try again later.");
//       // }
//       return response;
//     })
// }
// export default courseFetch;