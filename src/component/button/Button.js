import React from 'react';

import './Button.scss';

export default function Button({className,...props}) {
  return (
    <button className={`button ${className}`} {...props}>{props.children}</button>
  )
}
