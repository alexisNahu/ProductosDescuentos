import React from 'react'
import type { DropdownItem, SingleItem, SidebarItemsType } from './model'
import SidebarItem from './SidebarItems/SidebarItem';
import './sidebar.css'

function Sidebar({items}: {items: SidebarItemsType}) {
  return (
    <div className='sidebar w-25 bg-primary h-100'>
      <div className='w-100 d-flex flex-column'>
        <ul className='list-group'>
          {
          items.map((item, i) => {
            return <li className='list-unstyled list-group-item-action'><SidebarItem item={item} key={i}/></li>
          }) 
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar