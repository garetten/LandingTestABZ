import React from 'react'

import './Cart.scss'

export default function Cart({ cart }) {
  return (
    <div className='cart'>
      <div className='cart__img'>
        <img src={cart.photo} alt='' />
      </div>
      <div className='cart__title'>{cart.name}</div>
      <div className='cart__text'>
        <div className='cart__text__position'>{cart.position}</div>
        <div className='cart__text__email'>{cart.email}</div>
        <div className='cart__text__phone'>{cart.phone}</div>
      </div>
    </div>
  )
}
