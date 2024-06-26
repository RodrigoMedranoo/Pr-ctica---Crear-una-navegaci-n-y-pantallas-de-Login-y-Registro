import React from 'react'
import { Box, Button, Card, Heading, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

function SignIn() {
    const navigate = useNavigate();
  return (
    <>
    <Box  
        backgroundImage={
        "https://images2.alphacoders.com/602/602223.jpg"} 
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        w={"100%"}
        h={"639"}
        justifyContent="center"
        alignItems="center"
        >
        <Card bg={"#ffffff"} p={5}  >
            <Heading
              bgGradient='linear(to-l, #84926a, #4c4a45)'
              bgClip='text'
              fontSize='4xl'
              fontWeight='bold'
            >
                Iniciar Sesion</Heading>
            <VStack spacing={2}>
            <Input placeholder="Usuario" variant='outline'></Input>
            <Input placeholder="Contraseña" variant='outline'></Input>
            </VStack>
            <Box my={2}/>
            <Button bg="#450068" color="#ffffff" borderRadius={"30px"}  onClick={() => navigate("/")}>
                Iniciar Sesion
            </Button>
            <Button 
            variant = "link"
            onClick={() => navigate("/signup")}>
                No tienes una cuenta? Registrate
            </Button>
        </Card>
        </Box>
    </>
  );
}

export default SignIn;