import Header from './Header'
import { Outlet } from 'react-router-dom'
import SideBar from './Sidebar'
import { useState } from 'react'

export const Layout = () => {

  const [openSide, setOpenSide] = useState(window.innerWidth > 650 ? true : false)

  return (
    <>
      <Header openSide={openSide} setOpenClose={setOpenSide}/>
      <div
        className='
     
    bg-[var(--bgColor)]
    max-sm:w-full
    max-md:w-full
    w-[50%] 
    m-auto
    max-lg:m-auto 
    max-xl:m-auto
    max-2xl:m-auto
    h-screen
    overflow-y-auto 
    text-[var(--white)]'>

        <Outlet />
        
      </div>
      <SideBar openSide={openSide} setOpenClose={setOpenSide} />
    </>
  )
}
