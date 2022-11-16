import React from 'react'

export default function ItemDetails(props) {
  const { text } = props
  console.log(text)
  return (
    <div>
      <p className='item-details'>{text}</p>
    </div>
  )
}
