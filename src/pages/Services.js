import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img2.jpg";
import { motion } from "framer-motion";
import { animationFour } from "../animations";

const Services = () => {
  return (
    <motion.div initial="out" animate="end" exit="out" variants={animationFour}>
      <Header />
      <Hero image={Image} btndesc="Learn More" />
    </motion.div>
  );
};

export default Services;
