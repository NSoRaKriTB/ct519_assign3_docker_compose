import React from 'react'
import NutImg from '../../assets/nut.jpg'
import Navbar from './Navbar'

const Header: React.FC = () => {
  return (
    <div>

      <div className='relative bg-cyan-700 w-100 h-[150px] z-50'>
        <div>
          <div className='absolute -bottom-24 left-20'>
            <div className='bg-white p-2 rounded-full'>
              <img
                className=' object-cover object-top w-48 h-48 mx-auto rounded-full'
                src={NutImg}
                alt="Nut"
              />
            </div>
          </div>
          <div className='absolute left-80 bottom-5 z-40'>
            <h1 className='text-3xl font-bold text-white mb-2'
              style={{
                textShadow: '2px 2px 4px #000000'
              }}
            >Sorakrit Bunpanya</h1>
            <h1 className='text-xl font-bold text-white mb-1'
              style={{
                textShadow: '2px 2px 4px #000000'
              }}
            >ID:66130522</h1>
            <h3 className='text-xl font-bold text-white'
              style={{
                textShadow: '2px 2px 4px #000000'
              }}
            >Email:sorakrit.main@gmail.com</h3>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <Navbar />
      </div>
    </div>

  )
}

export default Header