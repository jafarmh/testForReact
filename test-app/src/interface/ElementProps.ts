import React from 'react';
import { UserEntityProps } from './Entity';

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