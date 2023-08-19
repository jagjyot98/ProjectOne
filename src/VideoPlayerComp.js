import React, { useRef, useState } from 'react';

const VideoPlayerComp = ({source, title}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  
  return (
    <div>
      {/* <video ref={videoRef} width="640" height="360" controls>
        <source src="https://youtu.be/uyogvcSClp8" type="video/mp4"/> 
        {/* https://youtu.be/uyogvcSClp8 */}
        {/* //type="video/mp4" /> */}
        {/* Your browser does not support the video tag. */}
      {/* </video> */} */
      {/* <iframe width="1280" height="720" src="https://www.youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S" title="Programming in C" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {/* <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
    </div>
  );
};

export default VideoPlayerComp;


// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';

// const VideoPlayerComp = ({source}) => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Video
//         ref={videoRef}
//         source={source}
//         style={styles.video}
//         resizeMode="contain"
//         paused={!isPlaying}
//         repeat
//       />
//       <TouchableOpacity onPress={handlePlayPause} style={styles.playPauseButton}>
//         {/* Customize play/pause button here */}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   video: {
//     width: '100%',
//     height: 300,
//   },
//   playPauseButton: {
//     position: 'absolute',
//     alignSelf: 'center',
//     zIndex: 1,
//     // Customize play/pause button styles here
//   },
// });

// export default VideoPlayerComp;
