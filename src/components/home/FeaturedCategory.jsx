import React from 'react'
import featuredCategoryData from '@/app/data/FeaturedCategories'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const FeaturedCategory = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
  return (
      <div>
          <div className='bg-[#272727] py-5 flex items-center justify-center'>
              <div className='w-[95%] xl:w-[90%]  flex flex-col'>
                  <div className='w-[100%] h-[80px]  flex flex-col text-[#D0C9C0] justify-center gap-3 items-center'>
                      <h1 className='tracking-[10px] text-xl'>FEATURED CATEGORIES</h1>
                      <h2 className="text-xl tracking-[10px] font-bold">JUSTILES</h2>
                  </div>
                  {isClient && featuredCategoryData.map((item, index) => {
                      const isEven = index % 2 == 0
                      return (
                        <div key={index} className='w-[100%] py-5  lg:flex lg:flex-row lg:items-center lg:gap-7'>
                              {isEven && (
                                  <>
                                       <div className='w-[100%] h-[300px] xl:h-[400px] xl:w-[70%] '>
                                   <Image src={item.image} style={{ objectFit: 'cover' }} sizes='100vw' alt='image' width={0} height={0}  className='w-[100%] h-full'/>
                               </div>
                               <div className='w-[100%] my-5 lg:py-5  xl:w-[70%]'>
                                           <h1 style={{textDecoration: "underline"}} className='text-[#D0C9C0] text-2xl py-5'>{item.title}</h1>
                                           <p dangerouslySetInnerHTML={{__html: item.description}} className='text-[#D0C9C0] xl:text-lg xl:leading-[40px]'/>
                               </div>
                                  </>
                              )}
                              {!isEven && (
                                  <>
                                     <div className='w-[100%] my-5 lg:py-5  xl:w-[70%]'>
                                           <h1 style={{textDecoration: "underline"}} className='text-[#D0C9C0] text-2xl py-5'>{item.title}</h1>
                                           <p dangerouslySetInnerHTML={{__html: item.description}} className='text-[#D0C9C0] xl:text-lg xl:leading-[40px]'/>
                                      </div>
                                      <div className='w-[100%] h-[300px] xl:h-[400px] xl:w-[70%] '>
                                   <Image src={item.image} style={{ objectFit: 'cover' }} sizes='100vw' alt='image' width={0} height={0}  className='w-[100%] h-full'/>
                               </div>
                                  </>
                              )}
                        </div>
                      )
                  })}
              </div>
          </div>
    </div>
  )
}

export default FeaturedCategory