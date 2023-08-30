import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import Stack from 'react-bootstrap/Stack';
import imageBull from './images/imageBull.jpg'  
// import { Application } from '@splinetool/runtime';

function CarouselComponent() {

  const courses = [
    { id: 1, name: 'Mathematics', instructor: 'John Doe' },
    { id: 2, name: 'Physics', instructor: 'Jane Smith' },
    { id: 3, name: 'Computer Science', instructor: 'Alex Johnson' },
  ];



  // const canvas = document.getElementById('canvas3d');
  // const app = new Application(canvas);
  // app.load('https://prod.spline.design/7tWf5D2TZj7u34F1/scene.splinecode');
  



  return (
    <Carousel variant="dark">
      <Carousel.Item>
      {/* className="d-md-block h-10" */}
        <img width={1000} height={500} src={imageBull} alt="First slide" />
        {/* <div className="carousel-image"></div> */}
        <Carousel.Caption>
          {/* <h5>{courses.name}</h5> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>  title={course.name} */}
          <a tabIndex="0" className="btn btn-lg btn-outline-dark" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content={courses.instructor}>{courses.name}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img width={1000} height={500} src={imageBull} alt="Second slide" />
        {/* <div className="carousel-image"></div> */}
        <Carousel.Caption>
          {/* <h5>{courses.name}</h5> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>  title={course.name} */}
          <a tabIndex="1" className="btn btn-lg btn-outline-dark" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content={courses.instructor}>{courses.name}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img width={1000} height={500} src={imageBull} alt="Third slide" />
        {/* <div className="carousel-image"></div> */}
        <Carousel.Caption>
          {/* <h5>{courses.name}</h5> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>  title={course.name} */}
          <a tabIndex="2" className="btn btn-lg btn-outline-dark" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content={courses.instructor}>{courses.name}</a>
        </Carousel.Caption>
      </Carousel.Item>
      {/* </div>
      ))} */}
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