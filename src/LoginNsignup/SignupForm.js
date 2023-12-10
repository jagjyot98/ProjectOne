import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Login from './LoginPage';

function SignupForm() {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        if (state.name === "" || state.password === "" || state.email === "") {
            alert('Please enter details!');
        } else {
            event.preventDefault();
            fetch('http://localhost:5000/www/ProjectOne/BackEnd/signup.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: state.name,
                    userEmail: state.email,
                    userPassword: state.password
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log("Data", data);
                    alert("User login success !");
                    navigate('/');
                });
        }
    };

    return (
        <div>
            {/* <h1>SignUp</h1> */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={state.name}
                    onChange={handleChange}
                /><br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={state.email}
                    onChange={handleChange}
                /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={state.password}
                    onChange={handleChange}
                /><br />
                <input type="submit" value="SignUp" />
            </form>
            {/* <h3>OR</h3>
            Already Registered?  <Link to="/login">Login</Link> here! */}
            {/* <h3>OR</h3>
            Update a User? <Link to="/update">Update</Link> here!
            <h3>OR</h3>
            Delete an exiting User? <Link to="/delete">Delete</Link> here! */}
        </div>
    );
}

export default SignupForm;



// import { Component } from "react";
// import { Link, useNavigate  } from "react-router-dom";
// import Login from './LoginPage';
// // import Update from './Update';
// // import Delete from './Delete';
// // import { Link  } from "react-router-dom";

// class SignupForm extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             password: ''
//         };
//         const navigate = useNavigate();
//     }
//     handleChange = event => {
//         this.setState({ [event.target.name]: event.target.value });
//     };
//     handleSubmit = event => {

//         if(this.state.name === "" || this.state.password === "" || this.state.email === ""){
//                 alert('Please enter details!');
//         }else{

        
//         event.preventDefault();
//         fetch('http://localhost:5000/www/ProjectOne/BackEnd/signup.php', { // http://localhost:5000/BackEnd/signup
//           method: 'POST', headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             userName: this.state.name,
//             userEmail: this.state.email,
//             userPassword: this.state.password
//           })
//         })
//           .then(response => response)
//           .then(data => {
//             console.log("Data".data);
//           });
        
//       };
//     }
//     render() {
//         return (
//             <div>
//             {/* <h1>SignUp</h1> */}
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     required
//                     value={this.state.name}
//                     onChange={this.handleChange}
//                 /><br/>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     required
//                     value={this.state.email}
//                     onChange={this.handleChange}
//                 /><br/>
                
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     required
//                     value={this.state.password}
//                     onChange={this.handleChange}
//                 /><br/>
//                 <input type="submit" onClick={this.handleSubmit}  value="SignUp"/>
//             </form>
//             {/* <h3>OR</h3>
//             Already Registered?  <Link to="/login">Login</Link> here! */}
//             {/* <h3>OR</h3>
//             Update a User? <Link to="/update">Update</Link> here!
//             <h3>OR</h3>
//             Delete an exiting User? <Link to="/delete">Delete</Link> here! */}
//             </div>
//         );
//     }
// }

// export default SignupForm;