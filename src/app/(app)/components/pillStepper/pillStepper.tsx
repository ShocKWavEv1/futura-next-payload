import { Box, Text } from "@chakra-ui/react";
import { PillStepperProps } from "./model";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

const PillStepper: React.FC<PillStepperProps> = () => {
  return (
    <Box
      w="auto"
      p="0px 0px"
      bg="rgba(255, 255, 255, .1)"
      display="grid"
      gridTemplateColumns="auto 1fr auto"
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
        _hover={{
          bg: "white",
          color: "black",
          transition: "all .3s ease-in-out",
        }}
      >
        <Text variant="XSMEDIUM">
          <TfiMinus />
        </Text>
      </Box>
      <Box
        w="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px="10px"
      >
        <Text variant="XSMEDIUM" color="white">
          20
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
        _hover={{
          bg: "white",
          color: "black",
          transition: "all .3s ease-in-out",
        }}
      >
        <Text variant="XSMEDIUM">
          <TfiPlus />
        </Text>
      </Box>
    </Box>
  );
};

export default PillStepper;
