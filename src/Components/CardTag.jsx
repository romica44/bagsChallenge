import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";


const color = { normal: "#7B5BE4"  };

const CardTag = ({
  title = "Good Fit",

}) => {
  const [bgColor] = useState(color.normal);

  return (
    <Text
      w= "90px"
      h= "30px"
      fontFamily="Open Sans"
      font-style="normal"
      font-weight="600"
      font-size="14px"
      line-height="20px"
      position="absolute"
      top="-30px"
      right="20px"
      zIndex="1"
    >
      <Box
        w="121px"
        h="30px"
        bg={bgColor}
        left="-23px"
        top="10px"
        zIndex="1"
        color="white"
        background={bgColor}
        textAlign="center"
        pointerEvents="auto"
        position="absolute"
      
      >
        {title}
      </Box>
    </Text>
  );
};

export default CardTag;
