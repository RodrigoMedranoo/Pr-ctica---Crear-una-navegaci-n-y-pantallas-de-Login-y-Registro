import { Card, Heading , Text} from '@chakra-ui/react'
import React from 'react'

function ProductCard({nombre,sabor,cantidad,alcholico, onClick}) {
  return (
    <Card
    background={'#30FDF3'} p={3} my={'7px'} onClick={onClick}
    >
        <Heading>{nombre}</Heading>
        <Text>Sabor: {sabor}</Text>
        <Text>{cantidad} ml</Text>
        <Text fontWeight={800}>{alcholico?'Bebida alcholica': null}</Text>
    </Card>
  )
}

export default ProductCard