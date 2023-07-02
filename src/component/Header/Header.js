import React from 'react'

import Button from '../ui/button/Button'

import logo from '../../assets/logo_cat.png'

import './Header.scss'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo logo'>
          <div className='logo__image'>
            <img src={logo} alt='logo' />
          </div>
          <div className='logo__text'>testtask</div>
        </div>
        <nav className='header__nav nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Button>Users</Button>
            </li>
            <li className='nav__item'>
              <Button>Sign up</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
