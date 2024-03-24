import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { Text } from '@chakra-ui/react'

function Product() {
  const {id} = useParams()
  const[producto,setproducto] = useState ({})
  useEffect(()=>{
    axios
    .get(`http://localhost:8000/api/bebidas/${id}/`)
    .then ((response)=>{
      setproducto(response.data)
    })
    .catch(e=>{
      console.log(e)  
    })
  },[])
  return (
    <>
      <Text>Producto num {id}</Text>
      {
        producto?(
          <ProductCard 
      nombre={producto.nombre}
      sabor={producto.sabor}
      cantidad={producto.cantidad}
      alcholico={producto.alcholico}
      />
      ): <Text>Esperando Producto</Text>
      }
    </>
  )
}

export default Product