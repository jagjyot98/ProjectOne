import { useLocation } from 'react-router-dom';
import React from 'react';
import { View } from 'react-native';
import './config';
import VideoPlayerComp from './VideoPlayerComp'; // Replace with the correct path
// import videoFile from './Videos/C';
// import videoFile from './Videos/C';//'E:/PROJECT/Videos/C/C01.mp4'; //'./videos/C01.mp4'

const VideoPage = () => {     //will be turned to a parameterised function taking value for selected video
  
const location = useLocation();
const videoPath = location.state.videoPath;
const Title = location.state.Title;

 // const { patch } = useParams();
console.log(videoPath, Title);

// const videoFile = patch; //'E:/PROJECT/Videos/C/C01.mp4';//String(global.config.globalVariables.strings.firstHalf)
// C:\Users\jagjy\Desktop\ReactProject\dockerContain\ProjectOne\src\Videos
// src\Videos\C\C01.mp4
// console.log(videoPath);

  return (
    <View>
      <VideoPlayerComp source={videoPath} title={Title}/>
        {/* //{Vsource} title={Vtitle}/> */}
      {/* Add other components or UI elements here */}
    </View>
  );
};

export default VideoPage;