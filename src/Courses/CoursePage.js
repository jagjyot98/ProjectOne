import { useParams } from 'react-router-dom';
import courseFetchSpecific from './courseFetchSpecific';
import React, { useEffect, useState } from 'react'; // Import useEffect and useState



const CoursePage = () => {
    const { id } = useParams();
    // console.log(id);
    const [course, setCourse] = useState([]);

    useEffect(() => {
        // Fetch courses when the component mounts
        courseFetchSpecific(id)
          .then((data) => {
            setCourse(data); // Update the state with the fetched courses
          })
          .catch((error) => {
            console.error("Error fetching courses:", error);
          });
      }, [id]);   // Include 'id' as a dependency to re-fetch when it changes
    // courseFetchSpecific(id);

  console.log(course);

    return (
        <div className="body" >
            <h1>{course.courseName}</h1>
            <br/>
            <h3>{course.courseProf}</h3>
        </div>
        
    )
}
export default CoursePage;