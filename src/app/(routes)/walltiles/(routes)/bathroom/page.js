import Navigation from '@/components/wall-tiles/Navigation'
import React from 'react'

const Bathroom = () => {
  return (
    <div className='bg-[#272727]'>
       <div className='p-3 md:p-10 lg:p-10 xl:pt-[50px] xl:px-[100px] '>
      <h1 className='text-2xl  text-[#D0C9C0]'>Bathroom</h1>
      <p className='text-lg mt-4 xl:text-lg xl:leading-[40px] text-[#D0C9C0] leading-[40px] '>Whether you’re a bath or a shower person (and we don’t judge round here), today’s bathrooms are much more than a place to simply get clean in. They’re an essential living space and as a result, the way we decorate our bathrooms goes way beyond pure function - colour, texture and patterns are just as important here as in any other room.
      So whatever your taste - clean and contemporary or elegant and traditional - we’ve got all the bathroom floor tiles (and wall tiles too) you’ll need to create your own personal haven. From mosaics to metros, high gloss to high end, our range of tiles for bathrooms don’t just look great, they’re really easy to live with too. So your bathrooms won’t just be the best-dressed; they’ll be the best-kept too.</p>
   
          </div>
          <Navigation />
    </div>
  )
}

export default Bathroom