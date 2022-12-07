import React from 'react';
import {
    Box,
    Text,
    Heading,
    StackDivider
  } from '@chakra-ui/react';

  import {Icon} from '@chakra-ui/react';
  import {CiLocationOn} from 'react-icons/ci';

  function iconLocation() {
    return (
      <Icon as={CiLocationOn} />
    )
  }

const Card1 = () => {
  return (
    <Box
    w="80%"
    borderRadius="20px 20px 0 0"
    justifyContent="space-between"
    >
    <Box
      marginTop={10}
      marginLeft={6}
      w="200%"
      h="fit-content"
      position="relative"
      color="back"
      textAlign="left" >
      <Heading>Revenue Based Financing</Heading>
      <Text fontSize='xl'>By Lendistry</Text>
      <Text fontSize='xl'>{iconLocation()}Location</Text>
      <Text fontSize="m">Get Founded in <b>12 days.</b></Text>
    <StackDivider borderColor="gray" />
    <Box>
      <Text fontSize="xl" textColor="#7B5BE4"  fontWeight="bold" >
        $10,000 - $1,000,000
      </Text>
    </Box>
    </Box>
    </Box> 

  )
}

export default Card1;
