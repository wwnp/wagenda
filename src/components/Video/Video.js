import video from '../../2.mp4'
export function Video() {
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
        width="1920"
        height="1080"
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          width: '1920px',
          height: '1080px',
          transform: 'translateX(-50%)'
        }}
      >
      </video>
    </div>
  )
}
