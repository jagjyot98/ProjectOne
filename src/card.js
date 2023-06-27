import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const cardComp = () => {
    const courses = [
        { id: 1, name: 'Mathematics', instructor: 'John Doe' },
        { id: 2, name: 'Physics', instructor: 'Jane Smith' },
        { id: 3, name: 'Computer Science', instructor: 'Alex Johnson' },
        // { id: 1, name: 'Mathematics', instructor: 'John Doe' },
        // { id: 2, name: 'Physics', instructor: 'Jane Smith' },
        // { id: 3, name: 'Computer Science', instructor: 'Alex Johnson' },
    ];
    return (
        <div>
            {courses.map((course) => (
                <div key={course.id} className="course">
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>{course.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                Instructor: {course.instructor}
                            </Card.Text>
                            <Button variant="primary">More.</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}

        </div>
    );
}

export default cardComp;