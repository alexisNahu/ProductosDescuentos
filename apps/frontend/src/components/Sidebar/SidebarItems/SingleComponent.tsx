import React from 'react'
import type { SingleItem } from '../model'

function SingleComponent({item}: {item: SingleItem}) {
  return (
    <button className='text-white fw-bold btn bg-transparent'>{item.text}</button>
  )
}

export default SingleComponent