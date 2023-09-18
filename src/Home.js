// import SignupForm from "./LoginNsignup/SignupForm";
// import LoginPage from './LoginNsignup/LoginPage';
// import { Link, useNavigate  } from "react-router-dom";

// function DashboardPage() {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {/* <SignupForm /> */}
//       <h3>Login Success</h3>
//             Already Registered?  <Link to="/login">Login</Link> here!
//     </div>
//   );
// }

// export default DashboardPage;


import React from 'react';
import './style/dashboard.css';
import NavigationBar from './NavigationBar';
import CarouselComponent from './CarouselComponent';
import Stack from 'react-bootstrap/Stack';
import { Breadcrumb } from 'react-bootstrap';
// import C01 from './videos/C01.mp4'
// import { View } from 'react-native';
// import videoPlayerComp from './VideoPlayerComp';
// import SignupForm from "./LoginNsignup/SignupForm";
// import LoginPage from './LoginNsignup/LoginPage';
// import { Link, useNavigate  } from "react-router-dom";

const HomePage = () => {
  // Sample data for the dashboard
  // const courses = [
  //   { id: 1, name: 'Mathematics', instructor: 'John Doe' },
  //   { id: 2, name: 'Physics', instructor: 'Jane Smith' },
  //   { id: 3, name: 'Computer Science', instructor: 'Alex Johnson' },
  // ];

  const notifications = [
    { id: 1, text: 'Registration for Fall semester is now open' },
    { id: 2, text: 'Final exams will be held next week' },
    { id: 3, text: 'Career fair on campus tomorrow' },
  ];

  // const videoSource = require(C01); // Replace with your video file path

  return (
    <div className="dashboard">
      {/* <NavigationBar /> */}
      
      {/* <Breadcrumb/> */}

      <h1>Welcome to the University Dashboard</h1>

      <CarouselComponent />
    

      {/* <div className="courses">
        <h2>Your Courses</h2>
        {courses.map((course) => (
          <div key={course.id} className="course">
            <Stack direction="horizontal" gap={3}>
              <a tabindex="0" class="btn btn-lg btn-outline-dark" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title={course.name} data-bs-content={course.instructor}>{course.name}</a>
            </Stack>
          </div>
        ))}
      </div> */}

      <div className="notifications">
        <h2>Notifications</h2>
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            <p>{notification.text}</p>
          </div>
        ))}
      </div>

      {/* <View> */}
      {/* <videoPlayerComp source={videoSource} /> */}
      {/* Add other components or UI elements here */}
    {/* </View> */}
    </div>
  );
};

export default HomePage;
