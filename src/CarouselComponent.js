import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import Stack from 'react-bootstrap/Stack';

function CarouselComponent() {

  const courses = [
    { id: 1, name: 'Mathematics', instructor: 'John Doe' },
    { id: 2, name: 'Physics', instructor: 'Jane Smith' },
    { id: 3, name: 'Computer Science', instructor: 'Alex Johnson' },
  ];
  return (
    <Carousel variant="dark">
      {courses.map((course) => (
        <div key={course.id} className="course">
            <Carousel.Item>
              <img  className="d-md-block h-100" src="../images/digital_bull_4k_8k-7680x4320.jpg"  alt="First slide"/>
              {/* <div className="carousel-image"></div> */}
              <Carousel.Caption>
                <h5>{course.name}</h5>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                  <a tabindex="0" class="btn btn-lg btn-outline-dark" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title={course.name} data-bs-content={course.instructor}>{course.name}</a>
              </Carousel.Caption>
            </Carousel.Item>
        </div>
      ))}
    </Carousel >
    // < Carousel variant = "dark" >
    //   <Carousel.Item>
    //     {/* <img
    //       className="d-md-block h-100"
    //       src="./images/digital_bull_4k_8k-7680x4320.jpg"
    //       alt="First slide"
    //     /> */}
        
    //     <Carousel.Caption>
    //       <h5>First slide label</h5>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     {/* <img
    //       className="d-block h-100"
    //       src="./images/digital_bull_4k_8k-7680x4320.jpg"
    //       alt="Second slide"
    //     /> */}
    //     <Carousel.Caption>
    //       <h5>Second slide label</h5>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     {/* <img
    //       className="d-md-block h-100"
    //       src="./images/digital_bull_4k_8k-7680x4320.jpg"
    //       alt="Third slide"
    //     /> */}
    //     <Carousel.Caption>
    //       <h5>Third slide label</h5>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel >
  );
}

export default CarouselComponent;