import { Box, Heading } from "@chakra-ui/react";
import { ModalCategoriesProps } from "./model";

const ModalCategories: React.FC<ModalCategoriesProps> = ({
  categories,
  currentCategory,
  setCurrentCategory,
  handleClose,
}) => {
  const handleSelectCategory = (category: any) => {
    setCurrentCategory(category);
    handleClose();
  };

  return (
    <Box width="100%" display="grid" gridTemplateColumns="1fr" gap="20px">
      {categories.map((category: any, index: number) => {
        return (
          <Box
            key={category}
            w="100%"
            p="10px 10px"
            bg={
              currentCategory?.id === category?.id
                ? "primary.500"
                : "transparent"
            }
            _hover={{ bg: "primary.500", transition: "all .3s ease-in-out" }}
            onClick={() => handleSelectCategory(category)}
            cursor="pointer"
          >
            <Heading variant="H4BOLD" color="white">
              {category.description}
            </Heading>
          </Box>
        );
      })}
    </Box>
  );
};

export default ModalCategories;
