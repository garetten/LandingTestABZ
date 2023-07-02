import React, { useEffect, useState } from 'react'

import Cart from '../Cart/Cart'
import Button from '../ui/Button/Button'
import PostService from '../../API/PostService'

import './CartList.scss'
import Preloader from '../ui/Preloader/Preloader'

export default function CartList({ page, setPage, cartArr, setCartArr }) {
  const [count, setCount] = useState(6)
  const [totalPage, setTotalPage] = useState(0)

  async function getCart() {
    let res = await PostService.getAll(count, page)
    setCartArr([...cartArr, ...res.users])
    setTotalPage(res.total_pages)
  }

  function handleClick() {
    setPage(page + 1)
  }
  useEffect(() => {
    getCart()
  }, [page])
  if (!cartArr.length) {
    return <Preloader></Preloader>
  }
  console.log(cartArr)
  return (
    <div className='wrapper'>
      <div className='cart__container cart-list'>
        <div className='cart-list__title'>Working with GET request</div>
        <div className='cart-list__list'>
          {cartArr.map((cart) => {
            return <Cart key={cart.id} cart={cart}></Cart>
          })}
        </div>
        <div className='cart-list__button-container'>
          {totalPage !== page ? (
            <Button className={'cart-list__button'} onClick={handleClick}>
              Show more
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}
