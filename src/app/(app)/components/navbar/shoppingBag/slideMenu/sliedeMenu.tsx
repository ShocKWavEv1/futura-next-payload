import { motion } from "framer-motion";
import { SlideMenuProps } from "./model";
import { Box } from "@chakra-ui/react";
import MenuBody from "./menuBody/menuBody";
import { basePadding } from "@/app/(app)/lib/basePadding";
import Backdrop from "../../../backdrop/backdrop";

const SlideMenu: React.FC<SlideMenuProps> = ({ handleClose }) => {
  return (
    <Backdrop handleClose={handleClose}>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="full-screen-submenu"
      >
        <Box
          position="absolute"
          top={0}
          left="100%"
          right={0}
          bottom={0}
          width="50vw"
          h="100svh"
          bg="black"
          borderLeft="1.4px solid white"
          borderColor="white"
          p={basePadding()}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <MenuBody />
        </Box>
      </motion.div>
    </Backdrop>
  );
};

export default SlideMenu;
