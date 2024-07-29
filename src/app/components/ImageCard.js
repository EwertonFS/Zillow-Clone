import Image from 'next/image'
import React from 'react'

function ImageCard({url,fileName,width,height}) {
  return (
    <div>

      <Image 
      className='image'
      src={url}
      alt={fileName}
      width={width}
      height={height}
      priority
      />

    </div>
  )
}

export default ImageCard
