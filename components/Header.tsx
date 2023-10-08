"use client"

import { motion } from 'framer-motion'

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
      <nav className='fixed top-[0.15rem] left-1/2 h-12'>

      </nav>
    </header>
  )
}

export default Header