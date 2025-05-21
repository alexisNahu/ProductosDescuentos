import React from 'react'
import type { SingleItem } from '../model'

function SingleComponent({item}: {item: SingleItem}) {
  return (
    <p>{item.text}</p>
  )
}

export default SingleComponent