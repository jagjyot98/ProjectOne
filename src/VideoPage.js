import React from 'react';
import { View } from 'react-native';
import VideoPlayerComp from './VideoPlayerComp'; // Replace with the correct path

const VideoPage = () => {     //will be turned to a parameterised function taking value for selected video
  const videoSource = require('./videos/C01.mp4');//"https://youtu.be/uyogvcSClp8?list=RDcMxECdQTYSc";    //require('https://www.youtube.com/watch?v=uyogvcSClp8&list=RDcMxECdQTYSc&index=3');//('./videos/C01.mp4'); // Replace with your video file path

  return (
    <View>
      <VideoPlayerComp source={videoSource} />
      {/* Add other components or UI elements here */}
    </View>
  );
};

export default VideoPage;