import React from 'react'
import type { DropdownItem, SingleItem, SidebarItemsType } from './model'
import SidebarItem from './SidebarItems/SidebarItem';


function Sidebar({items}: {items: SidebarItemsType}) {
  return (
    <div className='container mw'>
        {
         items.map((item, i) => {
          return <SidebarItem item={item} key={i}/>
         }) 
        }
    </div>
  )
}

export default Sidebar