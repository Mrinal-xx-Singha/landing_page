import React from 'react'
import  background from './assets/image1.jpg';
import Header from './components/Header';
import './App.css'

const App = () => {
  return (
    
    <div style={{
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover'
    }}>
        <Header />
        
    </div>
  )
}

export default App
