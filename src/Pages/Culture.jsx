import {React,useEffect} from 'react'
import Header from '../Components/Culture/Header'
import CountriesCulture from '../Components/Culture/CountriesCulture'
import CountriesHighlight from '../Components/Culture/CountriesHighlight'

export default function Culture() {
  const videoStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1
  }

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(25, 55, 100, 0.6) 0%, rgba(75, 35, 85, 0.5) 50%, rgba(200, 45, 75, 0.4) 100%)',
    zIndex: -1
  }

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    minHeight: '100vh'
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        style={videoStyle}
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23667eea'/%3E%3C/svg%3E"
      >
        <source src="/Homescreen/Countries/video1.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
        }}></div>
      </video>

      {/* Overlay */}
      <div style={overlayStyle}></div>

      {/* Content */}
      <div style={contentStyle}>
        <Header/>
        <CountriesCulture/>
        <CountriesHighlight/>
      </div>
    </div>
  )
}