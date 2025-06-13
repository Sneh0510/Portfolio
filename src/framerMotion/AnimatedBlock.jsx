import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AnimatedBlock = ({ children, delay = 0, direction = "top" }) => {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  let x = 0;
  let y = 0;
  if (direction === "left") x = 40;
  if (direction === "right") x = -40;
  if (direction === "up") y = 40;
  if (direction === "down") y = -40;
  if (direction === "top") y = -40;  // matching your fadeIn 'down'

  const variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
};

export default AnimatedBlock;
