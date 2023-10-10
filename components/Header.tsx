"use client"

import { motion } from 'framer-motion'
import { links } from "@/lib/data"
import Link from 'next/link'

const Header = () => {
  /**
   * 1 - The relative class makes z index works better
   */
  return (
    <header className="z-[999] relative">
      <motion.div className="header-container" initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
      </motion.div>
      {/* It should have been inside the nav, but becuase framer is used, it is not */}
      <nav className='fixed top-[0.15rem] left-1/2 h-12  -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        {/* Mine was gap-x-6 mt-3 */}
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium'>
          {
            links.map(link => (
            <li key={link.hash} className='flex'>
              <Link href={link.hash}> {link.name}</Link> 
            </li>)
            )
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header