"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import { ClerkProvider, SignInButton, auth } from "@clerk/clerk-react";

const CLERK_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY



function Navbar() {

  return(
  <ClerkProvider publishableKey={CLERK_KEY}>
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Thrive Trading
      </h2>
      <div className="text-white"> 
      <SignInButton />
      </div>
    </div>
  </motion.nav>
  </ClerkProvider>
);
 };

export default Navbar;