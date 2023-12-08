"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center mt-80'>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
          Creando aplicaciones con tecnologías innovadoras, nunca hay un límite en este camino de aprendizaje.
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
           <motion.p
           className='text-3xl'
           variants={slideInFromLeft(0.5)}
           >

           Nunca dejes de creer, que eres importante...
           </motion.p>
        </motion.div>
    </div>
  )
}

export default SkillText