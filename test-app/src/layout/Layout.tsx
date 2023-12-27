import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div dir='rtl'
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
  )
}
