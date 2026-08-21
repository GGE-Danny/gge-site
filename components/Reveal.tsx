'use client';
import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

/* House section reveal: translateY(10px) + fade, 700ms, once, on scroll.
   Under prefers-reduced-motion the content simply renders in place. */
const Reveal = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.2, 0.6, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
