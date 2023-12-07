import { useParams } from 'react-router-dom';
import courseFetchSpecific from './courseFetchSpecific';
import videosFetch from '../videosFetch';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../style/courses.css';

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch course information when the component mounts
    courseFetchSpecific(id)
      .then((data) => {
        setCourse(data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });

  }, [id]);

  useEffect(() => {
    // Fetch videos when course information is available
    if (course.courseTable) {
      videosFetch(course.courseTable)
        .then((data) => {
          setVideos(data);
        })
        .catch((error) => {
          console.error("Error fetching videos:", error);
        });
    }

  }, [course]); // Include 'course' as a dependency


  console.log(course);
  console.log(videos);

  return (
    <div className="body" >
      <h1>{course.courseName}</h1>
      <br />
      <h3>{course.courseProf}</h3>
    {videos.map((video) => (
        <div key={video[0]} className="courses">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{video[1]}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                Instructor: {video[2]}
              </Card.Text>
              {/* videosFetch(course.courseTable) */}
              <Link to={`/video`} state={{ videoPath: video[5], Title: video[1] }}>
                <Button variant="primary">More</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}

    </div>
  )
}

export default CoursePage;

 
 
  // useEffect(() => {
  //   // Fetch courses when the component mounts
  //   courseFetchSpecific(id)
  //     .then((data) => {
  //       setCourse(data); // Update the state with the fetched courses

  //       // Fetch videos after successfully fetching the course
  //       videosFetch(data.courseTable)
  //         .then((videoData) => {
  //           setVideos(videoData); // Update the state with the fetched videos
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching videos:", error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching courses:", error);
  //     });
  //     console.log(course);
  //     console.log(videos); 
  // }, [id]);



 

// import { useParams } from 'react-router-dom';
// import courseFetchSpecific from './courseFetchSpecific';
// import videosFetch from '../videosFetch';
// import React, { useEffect, useState } from 'react'; // Import useEffect and useState

// const CoursePage = () => {
//   const { id } = useParams();
//   // console.log(id);
//   const [course, setCourse] = useState([]);
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     // Fetch courses when the component mounts
//     courseFetchSpecific(id)
//       .then((data) => {
//         setCourse(data); // Update the state with the fetched courses
//       })
//       .catch((error) => {
//         console.error("Error fetching courses:", error);
//       });

//     videosFetch(course.courseTable)
//       .then((data) => {
//         setVideos(data); // Update the state with the fetched courses
//       })
//       .catch((error) => {
//         console.error("Error fetching courses:", error);
//       });

//   }, [id]);   // Include 'id' as a dependency to re-fetch when it changes
//   // courseFetchSpecific(id);

// console.log(course);

// console.log(videos);

// return (
//   <div className="body" >
//     <h1>{course.courseName}</h1>
//     <br />
//     <h3>{course.courseProf}</h3>

//     {/* {courses.map((course) => (
//         <div key={course[0]} className="courses">
//           <Card style={{ width: '18rem' }}>
//             <Card.Body>
//               <Card.Title>{course[2]}</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the
//                 bulk of the card's content.
//                 Instructor: {course[5]}
//               </Card.Text>
//               <Link to={`/course/${course[0]}`}>
//                 <Button variant="primary">More</Button>
//               </Link>
              
//             </Card.Body>
//           </Card>
//         </div>
//       ))} */}
      
//   </div>

// )
// }
// export default CoursePage;