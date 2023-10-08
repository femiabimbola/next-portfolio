const Header = () => {
  /**
   * 1 - The relative class makes z index works better
   */
  return (
    <header className="z-[999] relative">
      <div className="fixed top-0 w-full left-1/2 h-[4.5rem] rounded-none border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem] sm:h-[3.25] sm:w-[36rem] sm:rounded-full">

      </div>
    </header>
  )
}

export default Header