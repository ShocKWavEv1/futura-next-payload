import { motion } from "framer-motion";
import { SlideMenuProps } from "./model";
import { Box } from "@chakra-ui/react";
import MenuBody from "./menuBody/menuBody";
import { basePadding } from "@/app/(app)/lib/basePadding";
import Backdrop from "../../../backdrop/backdrop";

const SlideMenu: React.FC<SlideMenuProps> = ({ handleClose, isHidden }) => {
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
          left={["0%", "20%", "50%", "80%", "100%"]}
          right={0}
          bottom={0}
          width={["200%", "180%", "150%", "120%", "50vw"]}
          h="101dvh"
          bg="black"
          mt={isHidden ? "80px" : "0px"}
          borderLeft={[
            "none",
            "1.4px solid white",
            "1.4px solid white",
            "1.4px solid white",
            "1.4px solid white",
          ]}
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
