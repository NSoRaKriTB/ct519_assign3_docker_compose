import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className='bg-blue-900 w-full h-16 flex justify-center items-center'>
      <div className='flex justify-between items-center w-[600px]'>
        <a href="/" className='text-white text-xl'>My Research</a>
        {/* <Link to="/playlist" onClick={ } className='text-white text-xl'>Playlist</Link> */}
        {/*    <a href="/" onclick="javascript:event.target.port=8000" style="color: #fff; font-size: 20px;">My Research</a> */}

        <a href={`/about/`} className='text-white text-xl'>About</a>
      </div>
    </div>
  )
}

export default Navbar