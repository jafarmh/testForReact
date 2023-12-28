import List from '../components/Users/List';
import React from 'react'
import { RootState } from '../data/store'
import { useSelector } from 'react-redux'

const Users = () => {

    const datas=useSelector((state:RootState)=>state.usersData);
    

  return (
    <>
    {datas && <List datas={datas}/>}
    </>
  )
}

export default Users