import React from 'react'

import './Tooltip.scss'
import { lengthDots } from '../../../helpers/lengthDots'

export default function Tooltip({ text, ...props }) {
  return (
    <div className={`tooltip__container ${props?.className}`}>
      <div className='tooltip__text'>{lengthDots(text)}</div>
      <div className='tooltip__text__helper'>{text}</div>
    </div>
  )
}
