import Image from 'next/image'
import React from 'react'

type Props = {}

const Loader = (props: Props) => {
  return (
    <div className='loader'>
        <Image src="/assets/icons/loader.svg" alt='Loader' width={32} height={32} className='animate-spin' /> 
        loader...
    </div>
  )
}

export default Loader