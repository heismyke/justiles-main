import Navigation from '@/components/wall-tiles/Navigation'
import React from 'react'

const OutdoorWallTiles = () => {
  return (
    <div className='bg-[#272727]'>
           <div className='p-3 md:p-10 lg:p-10 xl:pt-[50px] xl:px-[100px] '>
      <h1 className='text-2xl  text-[#D0C9C0]'>Outdoor  tiles</h1>
      <p className='text-lg mt-4 xl:text-lg xl:leading-[40px] text-[#D0C9C0] leading-[40px] '>They don’t call it the Great Outdoors for nothing, so turn your garden or patio into a stylish entertaining space with our range of outdoor tiles. At double the thickness of normal bathroom tiles, these outside tiles are built to withstand the elements - so come rain or shine, your alfresco spot will be just fine!</p>
   
          </div>
          <Navigation />
    </div>
  )
}

export default OutdoorWallTiles