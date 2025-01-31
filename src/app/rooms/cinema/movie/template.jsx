// animation for movie page
"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Template({
  children,
}) {
  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ y: 4, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 4, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
