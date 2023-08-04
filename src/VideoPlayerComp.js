// import React, { useRef, useState } from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';

// const VideoPlayerComp = ({ source }) => {
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
