import React from 'react'
import { useSelector } from 'react-redux'
import MenuItem from './TableItems'

const MenuList = () => {
  const list=useSelector(state => state.reducer.itemList)  

  return (
     
  <div >
    { List.map(item => (
      <MenuItem item={item}/>
    ))}
  </div>

    )
    
    }
    
export default MenuList
