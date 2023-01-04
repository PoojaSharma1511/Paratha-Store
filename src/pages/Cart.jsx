import React from 'react'
import { useSelector } from 'react-redux'
import Cartitem from './Cartitem'

export default function Cart() {

  const cartit = useSelector (state => state.cart)
  
  const total = cartit.reduce((a , b)=>{
    return a + b.price*b.count

  },0  )
  return (
  
<div>
  <div className='CARTSEC'>
    <h1> <b> TOTAL ({cartit.length}) </b> </h1>
    <h1> <b> TOTAL AMOUNT ({total}) </b> </h1>
    </div>
  <div className="cartsectwo">
  {
    cartit.map((cart)=>
    <Cartitem key={cart.id} cart={cart} />
    )
  }
  </div>
  
</div>
  
  )
}
