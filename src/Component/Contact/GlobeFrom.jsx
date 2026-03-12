import React from 'react'
import Globe from './Globle'
import From from './From'

const GlobeFrom = () => {
  return (
    <div className='flex m-2 mx-15 justify-center sm:flex flex-col items-center  min-h-full md:flex-col  lg:flex-row '>
      <Globe/>
      <From/>
    </div>
  )
}

export default GlobeFrom
