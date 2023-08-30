import React from 'react';
import CardComp from './card';
// import { Application } from './runtime.js';
import Anime1 from './anime1';
import './courses.css';

const Courses = () => {

  // const courses = [
  //     { id: 1, name: 'Mathematics', instructor: 'John Doe' },
  //     { id: 2, name: 'Physics', instructor: 'Jane Smith' },
  //     { id: 3, name: 'Computer Science', instructor: 'Alex Johnson' },
  //   ];
  return (
    <div className='body'>
      {/* Other components */}
      {/* <canvas id="canvas3d"></canvas>
      <a className="logo" href="https://spline.design"></a>
      <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.375/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/7tWf5D2TZj7u34F1/scene.splinecode"></spline-viewer> */}
      <div className='courseCards'>
        <CardComp />
      </div>

      <div className='animeCube'>
        <Anime1 />
      </div>

      {/* Other components */}
    </div>
  );
};

export default Courses;