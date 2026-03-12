import React from 'react'
import Myinformation from '../src/Component/Contact/Myinformation'
import From from '../src/Component/Contact/From'

const Contact = () => {
  return (
    <div className='flex m-2 mx-5 justify-center sm:flex flex-col items-center   md:flex-col  lg:flex-row'>
       <Myinformation/>
       <From/>
    </div>
  )
}

export default Contact
