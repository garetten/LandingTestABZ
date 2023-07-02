import React from 'react'

import './Preloader.scss'
export default function Preloader() {
  return (
    <div className='preloader__container'>
      <div className='loader'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
