// import './signup_login.css';
import React from 'react';
import { Link, useNavigate  } from "react-router-dom";
// import SignUp from './signup';
import '../App.css';
import axios, {Axios} from 'axios';
import { useState } from 'react';
import DashboardPage from '../Home';

function LoginForm({ navigation }){

  const navigate = useNavigate();

  const [inpval, setinpval] = useState({
    userEmail: "",
    userPassword: "",
});

const [data,setData] = useState([]);

const [span,setSpan] = useState(false);

const getdata = (e) => {

      const{value,name} = e.target;
      console.log(value,name);

      setinpval(()=>{

          return{
              ...inpval,
              [name]:value
          }
      })
  }
  const verifyUser = (e) =>{
    e.preventDefault();
    const {userEmail, userPassword} = inpval;
    if(userEmail === ""){
      alert("Please enter email!")
    }else if(userPassword === ""){
      alert("Please enter password!")
    }else{
      
      axios.post("http://localhost:5000/www/ProjectOne/BackEnd/login.php", inpval)
        .then((response) => {
          console.log(response.data);
          // if(response.data.status === 'true'){
            // navigate('/dash');
          // }else{
          //   console.log(response.data);
          // }
      })
    }
  }
    return (
      <div className="App">
          <div className='main'>
            <h1>Login</h1>
              <input type="email" id="email" name="userEmail" onChange={getdata}  placeholder="E-mail"/><br/>
              <input type="password" id="password" name="userPassword" onChange={getdata}  placeholder="Password"/><br/>
              <input type="submit" onClick={verifyUser} value="Submit"/>
              {/* <nav>
              New User? <Link to="/">SignUp</Link> here!
              </nav> */}
          </div>
        </div>
      );
}


export default LoginForm;

// import React, { Component } from 'react';
// // import './login_signup.css';
// // import Signup from './SignupPage';
// import DashboardPage from './DashboardPage';
// import { Link, useNavigate  } from "react-router-dom";
// const navigate = useNavigate();
// class LoginForm extends Component {
    
//     constructor(props){     
//         super(props);  
        
//         this.state = {
//             email: '',
//             password: ''
//         };
        
//     }   
           
//         handleChange = event => {   
//            this.setState({ [event.target.name]: event.target.value }); 
//         };  

//         handleSubmit = event => {   
//         if(this.state.email === "" || this.state.password === ""){
//             alert('Please enter details!');
//         }
//         else{
//            event.preventDefault(); 
//            fetch('http://localhost:5000/www/ProjectOne/BackEnd/login.php', { //http://localhost:3000/login', 
           
//             method: 'POST', headers: {
//                 'Content-Type': 'application/json'
//             }, 
//             body: JSON.stringify({ 
//                 userEmail: this.state.email,
//                 userPassword: this.state.password
//             })
//         }) 
//         navigate('/dash');
//         //    .then(response => response.json())
//         //    .then(data => {   
//         //         alert("Session started".data);
//         //    console.log(data);
//         //    });  
//         };  
//     } 
//     render() {
//         return (
//             <div>
//             {/* <h1>Login</h1> */}
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={this.state.email}
//                     onChange={this.handleChange}
//                 /><br/>
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={this.state.password}
//                     onChange={this.handleChange}
//                 /><br/>
//                 <input type="submit" onClick={this.handleSubmit}  value="Login"/>
//             </form>
//             {/* <h3>OR</h3>
//             New User? <Link to="/">SignUp</Link> here! */}
//             {/* <h3>OR</h3>
//             Update a User? <Link to="/update">Update</Link> here!
//             <h3>OR</h3>
//             Delete an exiting User? <Link to="/delete">Delete</Link> here! */}
//             </div>
//         );
//     }
// }
// export default LoginForm; 