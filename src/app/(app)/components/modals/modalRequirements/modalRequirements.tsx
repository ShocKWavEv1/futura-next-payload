import { Box, Heading } from "@chakra-ui/react";
import { ModalRequirementsProps } from "./model";
import Head from "next/head";

const ModalRequirements: React.FC<ModalRequirementsProps> = ({
  requirements,
  handleClose,
}) => {
  const data = requirements[0];
  return (
    <Box w="100%" display="flex" flexDirection="column" gap="40px">
      {data?.requirements?.map((item: any, index: number) => {
        return (
          <Box w="100%" key={item}>
            <Heading variant="H7BOLD" color="white">
              <Heading as="span" variant="H7BOLD" color="primary.500">
                ---
              </Heading>{" "}
              {item.description}
            </Heading>
          </Box>
        );
      })}
    </Box>
  );
};

export default ModalRequirements;
