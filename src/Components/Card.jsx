
import {
    Box,
    Text,
    Button
  } from '@chakra-ui/react';

  const colorButton = { bagsNormal: "#000000", bagsDesktop: "#0000FF"  };
  //si la pantale es mayor a 1350 pixeles se muestra bagsDesktop sino se muestra bagsNormal

  const changeButton = () => {
    if (window.innerWidth > 1350) {
      return colorButton.bagsDesktop;
    } else {
      return colorButton.bagsNormal;
    }
  };


const Card = () => {
  return (
      <Box 
        w="100%" 
        h="250%"
        position="absolute"
        border="grey 2px solid"
        borderRadius="10px"
        borderTop={0}
        >
        <Box marginTop="250px" alignItems="">
           <Text fontSize="xl" fontWeight="bold" textColor="black" >
            About The Lender
            <Button backgroundColor= {changeButton()} marginLeft="20" textColor="white"> Learn More </Button>
          </Text>
            <Text textAlign="justify" p="5" marginLeft="2" marginRight="2">
              Fill With Lorem lorem ipsum dolor sit amet, consectetur adipiscing elit dadsdsf ffdsfdsf asdasdas adasdsadas dasd dswda dsdad.
            </Text>

            <Box
            textColor="#7B5BE4"
            fontWeight="bold"
            p="2"
            textAlign="left"
            marginLeft="25px"
            >
              <Button  backgroundColor="light-grey" borderRadius="10" h="30px" w="350px"> Lender Benefit</Button>
            </Box>
            <Box
            textColor="#7B5BE4"
            fontWeight="bold"
            p="2"
            textAlign="left"
            marginLeft="25px"
            >
              <Button  backgroundColor="light-grey" borderRadius="10" h="30px" w="350px"> Lender Benefit</Button>
            </Box>
            <Box
            textColor="#7B5BE4"
            fontWeight="bold"
            p="2"
            textAlign="left"
            marginLeft="25px"
            >
              <Button  backgroundColor="light-grey" borderRadius="10" h="30px" w="350px" text-align="left"> Lender Benefit</Button>
            </Box>
           
        </Box>     

      </Box>

  )
}

export default Card;
