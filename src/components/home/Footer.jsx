import React from 'react'
import Link from 'next/link'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

  const icons = [
    faFacebook,
    faTwitter,
    faDribbble,
    faLinkedin
  ]

  return (
    <div>
      <footer className='w-[100%] py-5 bg-[#5F7161] flex items-start justify-center flex-col'>
        <div className='w-[100%] pb-4 xl:w-[90%] mx-auto flex flex-col lg:flex-col  px-5 md:px-5 xl:flex-row xl:justify-between'>
          <div className='w-[100%] lg:w-[100%] xl:w-[50%] py-5 '>
            <h6 className='text-2xl text-white tracking-[5px] pb-5 font-bold'>ABOUT</h6>
            <p className='text-[#D0C9C0] leading-[35px]'>Home is where the soul resides. 2022 has been a hard-hitting lesson where we were cooped up in our homes for days together and realized the importance of our personal space. The dreadful year made us understand how spending on house renovations is more of an investment than a splurge. While the ultimate vibe we all want for our homes is ‘Mi casa es su casa’, we all have our likes and dislikes. Here’s a fun insight on what kind of JUSTILES flooring and tiling you should go for based on your personality.</p>
          </div>
          <div className='w-[100%] lg:w-[100%]  xl:w-[45%]  lg:flex '>
            <div className='w-[100%] lg:w-[50%] py-5 '>
              <h6 className='text-2xl text-white tracking-[5px] pb-5 font-bold'>CATEGORIES</h6>
              <ul className='gap-5 flex flex-col text-[#D0C9C0]'>
                <li style={{textDecoration: "underline"}}><Link href="">Educational Video</Link></li>
                <li style={{textDecoration: "underline"}}><Link href="">Tile Guide</Link></li>
                <li style={{textDecoration: "underline"}}><Link href="">Tile Calculator</Link></li>
                <li style={{textDecoration: "underline"}}><Link href="">Blogs</Link></li>
                <li style={{textDecoration: "underline"}}><Link href="">Special</Link></li>
                <li style={{textDecoration: "underline"}}><Link href="">Expert Corner</Link></li>
              </ul>
            </div>
            <div className='w-[100%]  lg:w-[50%] py-5 '>
            <h6 className='text-2xl text-white tracking-[5px] pb-5 font-bold'>QUICK LINKS</h6>
              <ul className='gap-5 flex flex-col  text-[#D0C9C0]'>
                <li style={{textDecoration: "underline"}}><Link href="">Wall Tiles</Link></li>
                <li style={{textDecoration: "underline"}}><Link href="">Floor Tiles</Link></li>
                <li style={{textDecoration: "underline"}}><Link href="">Special Tiles</Link></li>
                <li style={{textDecoration: "underline"}}><Link href="">Expert Corner</Link></li>
              </ul>
              <button className='bg-[#D0C9C0] text-[#32353c]  h-[50px] px-5 rounded-lg mt-8'>Contact us</button>
            </div>
          </div>
        </div>
        <div className='w-[95%] xl:w-[90%] flex flex-col lg:flex-row border-[#D0C9C0] border border-b-0 border-l-0 border-r-0  mx-auto'>
          <div className='w-[100%] h-[70px] lg:w-[50%] text-[#D0C9C0] flex items-center '>
              <p>Copyright &copy; Designed by Michael shekwolo</p>
            </div>
          <div className='w-[100%] h-[70px] lg:w-[50%]  flex items-center gap-4'>
            {icons.map((icon, index) => (
              <div key={index} className='w-[40px] h-[40px] rounded-full bg-[#272727] flex items-center justify-center' >
              <FontAwesomeIcon icon={icon} className='text-xl text-[#818a91]'/>
              </div>
                ))}
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer