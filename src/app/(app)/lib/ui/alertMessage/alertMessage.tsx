import { Box, Text } from "@chakra-ui/react";
import { AlertMessageProps } from "./model";

const AlertMessage: React.FC<AlertMessageProps> = ({ title, message }) => {
  return (
    <Box
      w="100%"
      display="flex"
      alignItems="flex-start"
      gap="10px"
      flexDirection="column"
    >
      {title && (
        <Text variant="MDMEDIUM" color="white">
          {title}
        </Text>
      )}
      <Box w="100%" p="10px" bg="primary.500" borderRadius="4px">
        <Text variant="XSMEDIUM" color="white" fontSize="13px">
          {message}
        </Text>
      </Box>
    </Box>
  );
};
export default AlertMessage;
