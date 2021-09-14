import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img5.jpg";
import { motion } from "framer-motion";
import { animationOne } from "../animations";

const Page = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne}>
      <Header />
      <Hero
        title="Welcome to the Page"
        desc="Learn more about us"
        image={Image}
        btndesc="Learn More"
      />
    </motion.div>
  );
};

export default Page;
