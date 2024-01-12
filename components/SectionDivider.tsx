"use client"

import { motion } from 'framer-motion'
import React from 'react'


export default function SectionDivider() {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1}}
     className='bg-gray-200 my-4 h-16 w-1 rounded-full hidden sm:block'>
      
    </motion.div>
  )
}
