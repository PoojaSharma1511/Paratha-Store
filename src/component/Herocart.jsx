import { Center, VStack,Image,Text,Button } from '@chakra-ui/react'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {add, plus }  from "../store/expenseSlice"


function Herocart({product}) {
  const cart=useSelector((state)=>state.cart)

  const dispatch = useDispatch()
  const handleclick =() =>{
    let x = cart.filter(item=> item.id===product.id)
    if(x.length){
    dispatch(plus({
      ...product,
      count:x[0].count+1
    }))
      x=[]
    }else{
    
    dispatch(add(product))}
    
  }
    return (
<Center w="100%" mt="5" bg="gray.200" borderRadius={23} flexWrap alignContent>

  <VStack>
    
    <Image src={product.image} w="185px" h="185px" borderRadius={25}/>
    <Text>Title:{product.title}</Text>
    <Text>Price:{product.price}</Text>
    <Button onClick={()=>handleclick(product)} colorScheme="green" borderRadius={30}>Add to cart</Button>
  
  </VStack>
</Center>
  )
}

export default Herocart