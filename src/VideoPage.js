import React from 'react';
import { View } from 'react-native';
import VideoPlayerComp from './VideoPlayerComp'; // Replace with the correct path
import videoFile from 'E:/PROJECT/Videos/C01.mp4'//'./videos/C01.mp4'

const VideoPage = () => {     //will be turned to a parameterised function taking value for selected video
//   const Vsource = "https://www.youtube.com/embed/uyogvcSClp8";    //require('https://www.youtube.com/watch?v=uyogvcSClp8&list=RDcMxECdQTYSc&index=3');//('./videos/C01.mp4'); // Replace with your video file path
// const Vtitle = "BHANGRA MONKEY (feat. Tones &amp; I)  |  DJ FRENZY  |  Latest Punjabi Dance Remix Song 2019";
  return (
    <View>
      <VideoPlayerComp source={videoFile}/>
        {/* //{Vsource} title={Vtitle}/> */}
      {/* Add other components or UI elements here */}
    </View>
  );
};

export default VideoPage;