import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img5.jpg";
import { motion } from "framer-motion";
import { animationTree, transitionTwo } from "../animations";

const About = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationTree}
      transition={transitionTwo}
    >
      <Header />
      <Hero image={Image} />
    </motion.div>
  );
};

export default About;
