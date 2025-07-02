import Image from 'next/image'
import React from 'react'

function Logos() {
  return (
    <div className='flex relative'>

    <Image className="translate-x-300"
                
        src="/alexa.png"
        width={120}
        height={120}
        alt="Picture of the author"
    />

</div>
  )
}

export default Logos