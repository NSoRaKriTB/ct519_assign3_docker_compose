import React from 'react'
import Layout from '../common/Layout'

const Playlist: React.FC = () => {
  return (
    // https://www.youtube.com/watch?v=TntfD-GpPd4&list=RDTntfD-GpPd4&start_radio=1
    <>
      <Layout>
        <div className='flex justify-center items-center pt-10 '>
          <iframe width="720" height="400" src="https://www.youtube.com/embed/8WQUmd8P5zI?si=PtMHklJ1zuHXgQhU?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </Layout>
    </>

  )
}

export default Playlist