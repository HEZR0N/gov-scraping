import React from 'react'
import './EmptyCart.css'

const EmptyCart = () => {
  return (
    <>
    <div id="emptycartonly">
    <p class ="cart">Cart is empty</p>
  <p class="empty">Please add an Item!</p>
  <div id= "center">
    <a href="#/Shop" class="btn-h">{'>'} Shop Now!</a>
  </div>
  </div>
  </>
  )
}

export default EmptyCart