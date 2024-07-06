import React from 'react'
import Header from './Header'
import RainGif from '../../assets/rain.gif'


interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='z-0'
        style={{
          background: 'url(' + RainGif + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: 'calc(100vh - 200px)'
        }}
      >
        {children}
      </div>
    </>
  )
}

export default Layout