'use client'
import AppButton from '@/components/reusables/AppButton';
import { AppHeading } from '@/components/reusables/AppHeading';
import { motion } from 'motion/react';
import { whiteSpaces } from '@/utilities/globalspace';
import React from 'react';
import { FaCreditCard } from 'react-icons/fa6';
import { IoMdArrowRoundForward } from 'react-icons/io';

const Herosection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
    <section className='bg-hero-img  w-full bg-background min-h-96 m-auto flex flex-col items-center justify-center '>
       
      <motion.section
        className={`w-full m-auto ${whiteSpaces?.paddingX} py-2 md:py-[60px] flex flex-col gap-4 justify-center`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >

        <motion.div variants={containerVariants} className={`max-w-[1500px] mx-auto sm:max-w-[900px] lg:max-w-[2000px] flex flex-col w-full ${whiteSpaces.paddingX}`}>
          <motion.div variants={itemVariants} className="w-full">
            <AppHeading color='text-brand-color-text' align='left' className="md:w-full sm:w-full mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl sm:text-center grid m-auto text-left">
              We offer flexible payment plans for tours around Nigeria, with great
              support at every step of your journey.
            </AppHeading>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-2 mb-6 sm:mb-8 w-full sm:w-auto px-4 m-auto"
        >
          <AppButton
            icon={<IoMdArrowRoundForward className="w-4 h-4 sm:w-5 sm:h-5" />}
            className="w-full sm:w-auto"
          >
            Get Started
          </AppButton>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center sm:justify-center w-full"
        >
          <FaCreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-brand-color" />
          <p className="text-xs font-semibold sm:text-sm text-brand-color text-center">
            Cancel payments anytime!
          </p>
        </motion.div>
      </motion.section>
     </section>

     <svg
          viewBox="0 0 100 50"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute m-auto grid w-full h-full bottom-10"
          preserveAspectRatio="none"
        >
          <path
            stroke="#1A73E8"
            strokeWidth={'.2'}
            fill="none"
            d="M0 30 C37.5 30, 75 50, 85 25 S90 65, 100 23"
          />
        </svg>
     </>
  );
};

export default Herosection;
