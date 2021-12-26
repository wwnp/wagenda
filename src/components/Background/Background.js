import russiaBack from '../../images/russiaBack.jpg'
export function Background() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      botton: 0,
      backgroundImage: `url(${russiaBack})`,
      backgroundColor: 'red',
      height: '100%',
      width: '100%',
      zIndex: 0
    }}>

    </div>
  )
}