import { Box, Button, Text } from "@chakra-ui/react";
import { MenuBodyProps } from "./model";
import { TfiClose } from "react-icons/tfi";

const MenuBody: React.FC<MenuBodyProps> = ({
  isOpen,
  setIsShoppingBagOpen,
}) => {
  return (
    <Box
      w="100%"
      h="100vh" // Full viewport height
      display="flex"
      flexDirection="column"
      onWheel={(event: any) => event.stopPropagation()}
    >
      {/* Top Section with Close Icon */}
      <Box
        w="100%"
        h="calc(100vh - 17svh)" // Adjust height to leave space for the footer
        bg="red"
        display="flex"
        flexDirection="column"
        position="relative"
      >
        <Box w="100%" p="15px 0px" display="flex" justifyContent="flex-start">
          <Text
            onClick={(e) => {
              e.stopPropagation();
              setIsShoppingBagOpen();
            }}
            variant="LGMEDIUM"
            color="white"
            fontSize="1.8vw"
          >
            <TfiClose />
          </Text>
        </Box>
        <Box
          w="100%"
          h="100%"
          bg="green.500"
          overflowY="auto" // Make content scrollable
        >
          <Box w="100%" h="300vh" bg="yellow.500" />
        </Box>
      </Box>

      {/* Footer Section */}
      <Box
        w="100%"
        h="17svh"
        display="grid"
        gridTemplateColumns="1fr"
        borderTop="1.4px solid white"
        borderColor="white"
        bg="black"
      >
        <Box
          w="100%"
          h="100%"
          display="grid"
          gridTemplateColumns="1fr auto"
          pt="10px"
        >
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Text variant="MDMEDIUM" color="white">
              Total: $32,699
            </Text>
          </Box>
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Box
              w="auto"
              p="4px 12px"
              bg="rgba(255, 255, 255, .1)"
              borderRadius="25em"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text variant="XSMEDIUM" color="white" fontSize="0.9vw">
                Remover todo
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="-5px"
        >
          <Button variant="white" w="100%">
            Lo quiero todo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuBody;
