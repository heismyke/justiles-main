import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
      <div>
           <div className='w-[90%] py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mx-auto'>
        <Link href="/walltiles/bathroom-wall-tiles" className=' flex items-center border-[#5F7161] border-[0.1px] justify-center py-3 text-[#D0C9C0] hover:bg-[#5F7161]'>bathroom wall tiles</Link>
        <Link href="/walltiles/kitchen-wall-tiles" className='border-[#5F7161] border-[0.1px] flex items-center justify-center py-3 text-[#D0C9C0] hover:bg-[#5F7161]'>kitchen wall tiles</Link>
        <Link href="/walltiles/outdoor-wall-tiles" className='border-[#5F7161] border-[0.1px] flex items-center justify-center py-3 text-[#D0C9C0] hover:bg-[#5F7161]'>outdoor wall tiles</Link>
        <Link href="/walltiles/livingroom" className='border-[#5F7161] border-[0.1px] flex items-center justify-center py-3 text-[#D0C9C0] hover:bg-[#5F7161]'>living room</Link>
        <Link href="/walltiles/bathroom" className='border-[#5F7161] border-[0.1px] flex items-center justify-center  text-[#D0C9C0] hover:bg-[#5F7161]'>bathroom</Link>
        <Link href="/walltiles/commercial-space-wall-tiles" className='border-[#5F7161] border-[0.1px] flex items-center justify-center lg:py-3 pl-2 text-[#D0C9C0] hover:bg-[#5F7161]'>commercial space wall tiles</Link>
      </div>
    </div>
  )
}

export default Navigation