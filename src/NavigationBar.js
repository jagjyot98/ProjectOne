import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CarouselComponent from './CarouselComponent';
import { Link, useNavigate  } from "react-router-dom";
import CardComp from './card';
import Stack from 'react-bootstrap/Stack';
import SignupForm from "./LoginNsignup/SignupForm";
import LoginPage from './LoginNsignup/LoginPage';
import HomePage from './Home';
import Courses from './Courses';
import About from './about';
import './signup.css';

const NavigationBar = () => {

  const notifications = [
    { id: 1, text: 'Registration for Fall semester is now open' },
    { id: 2, text: 'Final exams will be held next week' },
    { id: 3, text: 'Career fair on campus tomorrow' },
  ];

  

  return (

    <Tabs
      defaultActiveKey="home"
      transition={true}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" href="src\Home.js" title="Home">
        <HomePage />
      </Tab>

      <Tab eventKey="about" href="/about" title="About">
        <About/>
      </Tab>

      <Tab eventKey="courses" href="/courses" title="Courses">
        <Courses />
      </Tab>

      {/* <Tab eventKey="calendar" href="/calendar" title="Calendar">
        Tab content for Profile
      </Tab> */}
      <Tab classname ="signup" eventKey="signup" title="SignUp">
        <div>
          <h1>Signup Page</h1>
          <SignupForm />
          <h3>OR</h3>
          Already Registered?  <Link to="/login">Login</Link> here!
        </div>
      </Tab>

      <Tab eventKey="contact" title="Contact" >
        {/* disabled */}
        Tab content for Contact
      </Tab>
    </Tabs>

    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <a className="navbar-brand" href="/">University App</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav">
    //       <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
    //       <li className="nav-item"><a className="nav-link" href="/courses">Courses</a></li>
    //       <li className="nav-item"><a className="nav-link" href="/calendar">Calendar</a></li>
    //       <li className="nav-item"><a className="nav-link" href="/grades">Grades</a></li>
    //       <li className="nav-item"><a className="nav-link" href="/">SignUp/SignIn</a></li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default NavigationBar;


// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

// function NoAnimationExample() {
//   return (
//     <Tabs
//       defaultActiveKey="home"
//       transition={false}
//       id="noanim-tab-example"
//       className="mb-3"
//     >
//       <Tab eventKey="home" href="/about" title="About">
//         Tab content for Home
//       </Tab>
//       <Tab eventKey="profile" title="Profile">
//         Tab content for Profile
//       </Tab>
//       <Tab eventKey="contact" title="Contact" disabled>
//         Tab content for Contact
//       </Tab>
//     </Tabs>
//   );
// }

// export default NoAnimationExample;
