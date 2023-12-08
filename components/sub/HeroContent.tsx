"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row h-[100vh] items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center items-center  m-auto text-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] ml-3 h-5 w-5" />
          <h1 className="Welcome-text text-[13px] mx-3">
            Programador Web FullStack Junior
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[850px] w-auto h-auto"
        >
          <span>
            El camino 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              del conocimiento{" "}
            </span>
            no tiene limites
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
Fanatico de Messi e Independiente... me considero una persona apasionada al campo digital, con valores fundamentales como el respeto hacia mis pares, abierto a las criticas constructivas y creativo para generar distintas soluciones a rubros del desarrollo Web.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="/CV_Nahuel_Astudillo.pdf"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
        
          <p className="mx-5">
            Descargar CV !
            </p>
          
        </motion.a>
      </div>

      {/* <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >

      </motion.div> */}
      
    </motion.div>
  );
};

export default HeroContent;
