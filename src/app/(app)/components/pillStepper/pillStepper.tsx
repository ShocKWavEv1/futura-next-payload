import { Box, Text } from "@chakra-ui/react";
import { PillStepperProps } from "./model";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

const PillStepper: React.FC<PillStepperProps> = ({ item }) => {
  return (
    <Box
      w="auto"
      p="0px 0px"
      bg="rgba(255, 255, 255, .1)"
      display="grid"
      gridTemplateColumns="35px 1fr 35px"
      py="2px"
      borderRadius="4px"
    >
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px="10px"
        borderRight="1px solid"
        borderColor="rgba(255, 255, 255, .3)"
        color="white"
        cursor="pointer"
        borderLeftRadius="4px"
        _hover={{
          bg: "white",
          color: "black",
          transition: "all .3s ease-in-out",
        }}
      >
        <Text variant="XSMEDIUM" fontSize="15px">
          <TfiMinus />
        </Text>
      </Box>
      <Box
        w="40px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px="10px"
      >
        <Text variant="XSMEDIUM" color="white" fontSize="15px">
          {item?.quantity}
        </Text>
      </Box>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px="10px"
        borderLeft="1px solid"
        borderColor="rgba(255, 255, 255, .3)"
        color="white"
        cursor="pointer"
        borderRightRadius="4px"
        _hover={{
          bg: "white",
          color: "black",
          transition: "all .3s ease-in-out",
        }}
      >
        <Text variant="XSMEDIUM" fontSize="15px">
          <TfiPlus />
        </Text>
      </Box>
    </Box>
  );
};

export default PillStepper;
