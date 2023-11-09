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
      <nav className='flex fixed left-[3rem] sm:left-[31rem] sm:top-[1.8rem] h-10 sm:py-0 justify-center '>
        {/* Mine was gap-x-6 mt-3 */}
        <ul className='flex w-[22rem]  items-center justify-center flex-wrap gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5'>
          {
            links.map(link => (
            <motion.li key={link.hash} className='h-3/4 flex items-center justify-center relative'
            initial={{y:-100, opacity:0}}
            animate={{ y:0, opacity: 1}}
            >
              <Link href={link.hash} className='flex w-full items-center justify-center px-3 py-3 hover:bg-gray-950 transition'> {link.name}</Link> 
            </motion.li>)
            )
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header