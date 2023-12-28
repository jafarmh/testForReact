import { CardProps } from '../../interface/ElementProps'
import React from 'react'

export const Card = ({ children}:CardProps) => {
    return (
        <div className='p-10 rounded-2xl bg-white flex flex-col gap-1 w-full md:max-w-[40%] m-2 md:m-0 '>
            {children}
        </div>
    )
}
