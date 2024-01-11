"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Intro() {
  return (
    <div>
      <section>
          <motion.div
            initial={{ rotate: -30, x: -50, y: -20, opacity: 0 }}
            animate={{ rotate: 0, x: 0, y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 10, stiffness: 70, delay: 0.5 }}
            className="relative"
          >
            <Image
              src="/cartoon-wired.png"
              alt="cartoon picture of Daniel"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[.35rem] border-white shadow-xl"
            />
             <motion.span
              className="absolute bottom-0 -left-4 text-4xl"
              animate={{
                rotate: [0, -10, 0, 10, 0],
                transition: { duration: 1.5, repeat: Infinity, repeatType: 'loop' },
              }}
            >
              👋
            </motion.span>
        </motion.div>
        <p></p>
      </section>
    </div>
  );
}
