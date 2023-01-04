import { Button, ButtonGroup } from '@chakra-ui/react'
import { useDispatch} from 'react-redux'

import {plus, remove} from "../store/expenseSlice"

export default function Cartitem({cart}) {

   const {image , title , price , id,count} = cart

   const dispatch = useDispatch()
  
 
   const handleremove = () =>{
     dispatch(remove(id))
   }
   
    
  return (
     <div className="product">
        <img src={image} alt=""/>
        <h4> <b> {title} </b></h4>
        <span>
           <h3> <b> Price :{price} </b> </h3> 
           <div><span>
            <ButtonGroup>
            <Button className='QTYBTN' colorScheme='gray'size='xs' onClick={()=>dispatch(plus({
            ...cart,
            count: count+1
           }))} >+</Button></ButtonGroup>
           </span><span>{count}</span>
           <ButtonGroup>
           <span>
            <Button colorScheme='gray' size='xs'
           onClick={()=>{
            if(count > 1)dispatch(plus({
               ...cart,
               count: count-1
              }))
           }}
            >-</Button>
            </span></ButtonGroup></div>
           <button className="add_cart" onClick={()=>handleremove(id)} >REMOVE</button>
        </span>
    </div>
  )
}
