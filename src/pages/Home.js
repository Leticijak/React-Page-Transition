import React from "react";

import Image from "../images/img1.jpg";
import { motion } from "framer-motion";
import { animationTwo, transitionTwo } from "../animations";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationTwo}
      transition={transitionTwo}
    >
      <Header />
      <Hero
        title="The best content  :) "
        desc="Check out what we have to offer"
        image={Image}
        btndesc="CHECK OUT"
      />
    </motion.div>
  );
};

export default Home;
