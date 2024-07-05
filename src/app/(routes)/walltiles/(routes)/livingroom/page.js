import Navigation from '@/components/wall-tiles/Navigation'
import React from 'react'

const LivingRoom = () => {
  return (
    <div className='bg-[#272727]'>
           <div className='p-3 md:p-10 lg:p-10 xl:pt-[50px] xl:px-[100px] '>
      <h1 className='text-2xl  text-[#D0C9C0]'>Living Room</h1>
      <p className='text-lg mt-4 xl:text-xl xl:leading-[40px] text-[#D0C9C0] leading-[40px] '>If you’re updating your living room, choosing the right flooring is probably the most important decision you can make; after all, the floor sets the foundations for the rest of your space.
      We’ve got a huge range of living room floor tiles in an array of shapes, sizes and style - so whatever your taste, you’re bound to find something that suits. And our floor tiles don’t just look great, they’re also highly practical and perfect to use with underfloor heating.</p>
   
          </div>
          <Navigation />
    </div>
  )
}

export default LivingRoom