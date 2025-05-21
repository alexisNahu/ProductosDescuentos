import React from 'react'
import type { DropdownItem, SingleItem } from '../model'
import SingleComponent from './SingleComponent'
import DropdownComponent from './DropdownComponent'


function SidebarItem({item}: {item: DropdownItem | SingleItem}) {
  if ('items' in item) {
    return <DropdownComponent item={item} />
  } 

  return <SingleComponent item={item} />
}

export default SidebarItem