// import React from React;
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import courseFetch from './courseFetch';
// import CoursePage from './CoursePage';

// handlePage = () => 

const CardComp = () => {
  const [courses, setCourses] = useState([]); // State to hold the courses data

  useEffect(() => {
    // Fetch courses when the component mounts
    courseFetch()
      .then((data) => {
        setCourses(data); // Update the state with the fetched courses
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div>
      {courses.map((course) => (
        <div key={course[0]} className="courses">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{course[2]}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                Instructor: {course[5]}
              </Card.Text>
              <Link to={`/course/${course[0]}`}>
                <Button variant="primary">More</Button>
              </Link>
              {/* <Button variant="primary" onClick={() => CoursePage({course})}>More.</Button>     */}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardComp;



// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import courseFetch from './courseFetch';
// import axios, { Axios } from 'axios';

// const cardComp = () => {

//     // axios.post("http://localhost:5000/www/ProjectOne/BackEnd/courseFetch.php")//, inpval)
//     // .then((response) => {
//     //     // const courseList = courseFetch();
//     //     // console.log(response);
//     // const courseList = Array.from(response.data.data[0]);
//     let x = courseFetch();
//     console.log(x);

//     //   courseFetch();
    
//  let courses = [
// //  courses = courseFetch();
//             { id: 1, name: 'Mathematics', instructor: 'John Doe' },
//             { id: 2, name: 'Physics', instructor: 'Jane Smith' },
//             { id: 3, name: 'Computer Science', instructor: 'Alex Johnson' },
//         //     // { id: 1, name: 'Mathematics', instructor: 'John Doe' },
//         //     // { id: 2, name: 'Physics', instructor: 'Jane Smith' },
//         //     // { id: 3, name: 'Computer Science', instructor: 'Alex Johnson' },
//         ];
    
//     return (
//         <div>
//             {courses.map((course) => ( 
              
//                 <div key={course.id} className="courses">

//                     <Card style={{ width: '18rem' }}>
//                         {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//                         <Card.Body>
//                             <Card.Title>{course.name}</Card.Title>
//                             <Card.Text>
//                                 Some quick example text to build on the card title and make up the
//                                 bulk of the card's content.
//                                 Instructor: {course.instructor}
//                             </Card.Text>
//                             <Button variant="primary">More.</Button>
//                         </Card.Body>
//                     </Card>
//                 </div>
//              ))
//         }
//         </div>
//     );
//     // })
// }

// export default cardComp;