import React from 'react'
import Trending from '../components/Trending'
import NftPrice from '../components/NftPrice'

const TopTrending = () => {
  return (
    <div className='w-full space-y-2'>
        <Trending/>
          <NftPrice imageSrc="/pixel.png" name="Zk Nakamigos" prices={[0.00001, 0.00001]} />
          <NftPrice imageSrc="/pixel.png" name="Zk Nakamigos" prices={[0.00001, 0.00001]} />
          <NftPrice imageSrc="/pixel.png" name="Zk Nakamigos" prices={[0.00001, 0.00001]} />
          <NftPrice imageSrc="/pixel.png" name="Zk Nakamigos" prices={[0.00001, 0.00001]} />
    </div>
  )
}

export default TopTrending