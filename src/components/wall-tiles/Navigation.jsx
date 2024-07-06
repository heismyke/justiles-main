"use client"


import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navigation = () => {
  const router = useRouter()

  const links = [
    { href: "/walltiles/bathroom-wall-tiles", label: "bathroom wall tiles" },
    { href: "/walltiles/kitchen-wall-tiles", label: "kitchen wall tiles" },
    { href: "/walltiles/outdoor-wall-tiles", label: "outdoor wall tiles" },
    { href: "/walltiles/livingroom", label: "living room" },
    { href: "/walltiles/bathroom", label: "bathroom" },
    { href: "/walltiles/commercial-space-wall-tiles", label: "commercial space wall tiles" },
  ];
  return (
    <div className='w-[90%] py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mx-auto'>
      {links.map(link => (
        <Link
          href={link.href}
          key={link.href}
          passHref
          className={`flex items-center border-[#5F7161] border-[0.1px] justify-center py-3 text-[#D0C9C0] ${
            router.pathname === link.href ? 'bg-[#5F7161]' : 'hover:bg-[#5F7161]'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default Navigation