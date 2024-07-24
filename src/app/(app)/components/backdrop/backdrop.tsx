"use client";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { BackdropProps } from "./model";
import { motion } from "framer-motion";

const Backdrop: React.FC<BackdropProps> = ({ children, handleClose }) => {
  useLockBodyScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="full-screen-menu"
      onClick={(e) => {
        e.stopPropagation();
        handleClose();
      }}
      onWheel={(e) => e.stopPropagation()}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
