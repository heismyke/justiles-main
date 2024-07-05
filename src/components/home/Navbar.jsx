"use client"


import React from 'react'
import Link from 'next/link'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import UseIsDesktop from '@/hooks/UseIsDesktop';


const Navbar = () => {
  const isDesktop = UseIsDesktop()

    const [isOpen, setIsOpen] = useState(false)
    const [subMenuWallTiles, setSubMenuWallTiles] = useState(false)
    const [subMenuFloorTiles, setSubMenuFloorTiles] = useState(false)
    const [subMenuExpertCorner, setSubMenuExpertCorner] = useState(false)
    const handleClick = () => {
      setIsOpen(!isOpen)
    }
//handle on mouse enter
  const handleMouseEnterWall = () => {
    if (isDesktop) {
      setSubMenuWallTiles(true)
        }
      
    }
    const handleMouseEnterFloor = () => {
      if (isDesktop) {
        setSubMenuFloorTiles(true)
       }
    }
    const handleMouseEnterExpertCorner = () => {
      if (isDesktop) {
        setSubMenuExpertCorner(true)
        }
    }

// handle on mouse leave
    const handleMouseLeaveWall = () => {
      if (isDesktop) {
        setSubMenuWallTiles(false)
       }
       
    }
    const handleMouseLeaveFloor = () => {
      if (isDesktop) {
        setSubMenuFloorTiles(false)
        }
    }
    const handleMouseLeaveExpertCorner = () => {
      if (isDesktop) {
        setSubMenuExpertCorner(false)
        }
    }


    //handle button click
  const handleSubmenuWallClick = () => {
    if (!isDesktop) {
      setSubMenuWallTiles(!subMenuWallTiles)
      setIsOpen(false)
      setSubMenuWallTiles(false)
      }
     
    }
  
    const handleSubmenuFloorClick = () => {
      if (!isDesktop) {
        setSubMenuFloorTiles(!subMenuFloorTiles)
        setIsOpen(false)
        setSubMenuFloorTiles(false)
      }
    }
  
    const handleSubmenuExpertCornerClick = () => {
      if (!isDesktop) {
        setSubMenuExpertCorner(!subMenuExpertCorner)
        setIsOpen(false)
        setSubMenuExpertCorner(false)
      }
    }

  return (
      <div>
          <nav className='w-full h-[80px] bg-[#5F7161]  border-[hsl(34,15%,78%)] border-b-[0.5px] relative flex justify-between items-center xl:px-[100px] px-5'>
            
            <div className=''>
              <Link href="/">
              <p className='text-[#D0C9C0] tracking-[10px] font-normal'>JUSTILES</p>
                </Link>
          </div>
        <ul className={isOpen ? 'w-[100%] bg-[#5F7161] h-[100vh] z-50 fixed top-0 left-0 flex flex-col justify-start gap-7' : 'hidden  lg:flex lg:flex-row'}>
          <div className='w-[100%] h-[20px] px-5 py-5 flex lg:hidden justify-end'>
          <button onClick={handleClick}  className='w-[35px] h-[35px]'>
            <FontAwesomeIcon icon={faXmark} className=' text-[#D0C9C0] text-2xl'/>
        </button>
          </div>
          <li onClick={handleSubmenuWallClick} className='text-xl px-12 pt-2  xl:text-sm lg:px-12 lg:py-0  text-[#D0C9C0]'><Link onMouseEnter={handleMouseEnterWall} onMouseLeave={handleMouseLeaveWall} href="/walltiles/bathroom-wall-tiles" className=''>Wall tiles</Link>
            <ul className={subMenuWallTiles ? 'w-[100%] h-[100vh] bg-[#272727] absolute top-0 left-0 flex flex-col justify-start gap-7 lg:top-[80px]  lg:h-[50vh]': 'hidden'}>
              <div className='w-[100%] px-2 py-5 flex  justify-between'>
              <button onClick={handleSubmenuWallClick}  className='w-[35px] lg:hidden h-[35px]'>
            <FontAwesomeIcon icon={faAngleLeft} className=' text-[#D0C9C0] text-2xl'/>
        </button>   
          <button onClick={handleClick}  className='w-[35px] lg:hidden h-[35px]'>
            <FontAwesomeIcon icon={faXmark} className=' text-[#D0C9C0] text-2xl'/>
        </button>
          </div>
              <li className='px-12 '><Link href="">bathroom wall tiles</Link></li>
              <li className='px-12 '><Link href="">kitchen wall tiles</Link></li>
              <li className='px-12 '><Link href="">outdoor wall tiles</Link></li>
              <li className='px-12 '><Link href="">living room tiles</Link></li>
              <li className='px-12 '><Link href="">bathroom </Link></li>
              <li className='px-12 '><Link href="">commercial spaces wall tiles</Link></li>
           </ul>
          </li>
          <li onClick={handleSubmenuFloorClick} className='text-xl px-12  xl:text-sm text-[#D0C9C0]'><Link onMouseEnter={handleMouseEnterFloor} onMouseLeave={handleMouseLeaveFloor} href="/floortiles" className=''>Floor tiles</Link>
          <ul className={subMenuFloorTiles ? 'w-[100%] h-[100vh] bg-[#272727] absolute top-0 left-0 flex flex-col justify-start gap-7  lg:top-[80px]  lg:h-[50vh]': 'hidden'}>
              <div className='w-[100%] px-2 py-5 flex  justify-between'>
              <button onClick={handleSubmenuFloorClick}  className='w-[35px] lg:hidden h-[35px]'>
            <FontAwesomeIcon icon={faAngleLeft} className=' text-[#D0C9C0] text-2xl'/>
        </button>   
          <button onClick={handleClick}  className='w-[35px] lg:hidden h-[35px]'>
            <FontAwesomeIcon icon={faXmark} className=' text-[#D0C9C0] text-2xl'/>
        </button>
          </div>
              <li className='px-12 '><Link href="">bathroom floor tiles</Link></li>
              <li className='px-12 '><Link href="">kitchen floor tiles</Link></li>
              <li className='px-12 '><Link href="">outdoor floor tiles</Link></li>
              <li className='px-12 '><Link href="">living room tiles</Link></li>
              <li className='px-12 '><Link href="">bathroom </Link></li>
              <li className='px-12 '><Link href="">commercial spaces floor tiles</Link></li>
           </ul>
          </li>
          <li className='text-xl xl:text-sm px-12 text-[#D0C9C0]'><Link href="/specialtiles">Special tiles</Link>
          </li>
          <li onClick={handleSubmenuExpertCornerClick}  className='text-xl px-12 xl:text-sm text-[#D0C9C0]'>
            <Link onMouseEnter={handleMouseEnterExpertCorner} onMouseLeave={handleMouseLeaveExpertCorner} href="/expertcorner">Expert corner</Link>
            <ul  className={subMenuExpertCorner ? 'w-[100%] h-[100vh] bg-[#272727] absolute top-0 left-0 flex flex-col justify-start gap-7  lg:top-[80px]  lg:h-[50vh]': 'hidden'}>
              <div className='w-[100%] px-2 py-5 flex  justify-between'>
              <button onClick={handleSubmenuExpertCornerClick}  className='w-[35px] h-[35px]'>
            <FontAwesomeIcon icon={faAngleLeft} className=' text-[#D0C9C0] text-2xl lg:hidden'/>
        </button>   
          <button onClick={handleClick}  className='w-[35px] h-[35px]'>
            <FontAwesomeIcon icon={faXmark} className=' text-[#D0C9C0] text-2xl lg:hidden'/>
        </button>
          </div>
              <li className='px-12 '><Link href="">Blogs</Link></li>
              <li className='px-12 '><Link href="">Tile guide</Link></li>
              <li className='px-12 '><Link href="">Educational videos</Link></li>
              <li className='px-12 '><Link href="">Tile calculator</Link></li>
           </ul>
          </li>
        </ul>
          <button onClick={handleClick} className='w-[35px] h-[35px]  flex items-center justify-center lg:hidden'>
            <FontAwesomeIcon icon={faBars} className=' text-[#D0C9C0] text-2xl'/>
        </button>
        
        </nav>
    </div>
  )
}

export default Navbar