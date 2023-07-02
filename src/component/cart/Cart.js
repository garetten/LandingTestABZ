import React from 'react'

import './Cart.scss'
import Tooltip from '../ui/Tooltip/Tooltip'

export default function Cart({ cart }) {
  return (
    <div className='cart'>
      <div className='cart__img'>
        <img src={cart.photo} alt='' />
      </div>
      <Tooltip text={cart.name} className={'cart__title'} />
      <div className='cart__text'>
        <div className='cart__text__position'>{cart.position}</div>
        <Tooltip text={cart.email} />

        <div className='cart__text__phone'>{cart.phone}</div>
      </div>
    </div>
  )
}
