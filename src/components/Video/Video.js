import video from '../../2.mp4'
export function Video(props) {
  const windowWidth = props.windowWidth
  const { widthVideo, heightVideo } = chooseSizesVideo(windowWidth)
  return (
    <div
      className="BackgroundVideo video"
      tabIndex="0"
      style={{
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        width: '100%',
        height: '100%',
        visibility: 'visible',
        overflow: 'hidden'
      }}
    >
      <video
        autoPlay
        loop
        muted
        src={video}
        preload="auto"
        playsInline=""
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          width: widthVideo + 'px',
          height: heightVideo + 'px',
          transform: 'translateX(-50%)'
        }}
      >
      </video>
    </div>
  )
}
function chooseSizesVideo(windowWidth) {
  if (windowWidth > 2000) {
    return {
      widthVideo: windowWidth,
      heightVideo: windowWidth / 1.77777777777777777777
    }
  } else {
    return {
      widthVideo: 1920,
      heightVideo: 1080
    }
  }
  // switch (windowWidth) {
  //   case (windowWidth > 2000):
  //     return {
  //       widthVideo: windowWidth,
  //       heightVideo: 1520
  //     }
  //   default:
  // return {
  //   widthVideo: 1920,
  //   heightVideo: 1080
  // }
  // }
}