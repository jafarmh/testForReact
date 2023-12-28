import { ProductEntityProps, UserEntityProps } from './Entity';

import React from 'react';

export interface SideMenuProps {
    openSide: boolean,
    setOpenClose: Function
}

export interface HeaderProps extends SideMenuProps {

}

export interface ListUserProps{

    datas:UserEntityProps[]
}

export interface CardProps{
    children:React.ReactNode,
}

export interface ListProductProps{

    datas:ProductEntityProps[]
}
