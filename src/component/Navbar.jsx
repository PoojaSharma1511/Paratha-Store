import { HStack ,Button} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { FaHome, FaShoppingCart } from "react-icons/fa";

import {useNavigate} from "react-router-dom"
function Navbar() {
 const items = useSelector((state)=>state.cart)
 const goto = useNavigate()
  return (
    <HStack bg="blue.400" p={3} justify="space-between">
<Button onClick={()=>goto("/")} leftIcon={<FaHome/>} colorScheme="yellow">Home</Button>
<Button onClick={()=>goto("cart/")} rightIcon={<FaShoppingCart/>} colorScheme="orange">Cart ({items.length}) </Button>

    </HStack>
     
  )
}

export default Navbar