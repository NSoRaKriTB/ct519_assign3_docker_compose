import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <div className='bg-blue-900 w-full h-16 flex justify-center items-center'>
      <div className='flex justify-between items-center w-[600px]'>
        <Link to="/" className='text-white text-xl'>My Research</Link>
        {/* <Link to="/playlist" onClick={ } className='text-white text-xl'>Playlist</Link> */}
        {/*    <a href="/" onclick="javascript:event.target.port=8000" style="color: #fff; font-size: 20px;">My Research</a> */}

        <Link to='/' onClick={() => window.location.port = "80"} className='text-white text-xl'>Playlist</Link>
      </div>
    </div>
  )
}

export default Navbar