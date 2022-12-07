
import {
    Stack,
  } from "@chakra-ui/react";
import CardTag from "./CardTag";
import Card from "./Card";
import Card1 from "./Card1";
  
  
const Index = () => {
    
  
    return (
      <Stack
        marginTop="100px"
        marginEnd="100px"
        marginLeft="550px"
        marginRight="550px"
        w="30%"
        h="150%"
        border="solid 3px"
        borderRadius="10px"
        paddingBottom="3"
        position="relative"
        boxShadow={'2xl'}
      >
     
      <Card />
      <Card1 />
      <CardTag />
     
      </Stack>
      
      
    );
};

export default Index