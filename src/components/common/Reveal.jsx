import React from "react";
import { motion } from "framer-motion";

/**
 * Reveal — fades + slides content into view once, on scroll.
 * Wrap any section content in this for consistent, premium entrance motion.
 */
const Reveal = ({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = "",
  as = "div",
  once = true,
  style,
}) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
