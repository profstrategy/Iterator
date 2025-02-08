'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { AppHeading } from '@/components/reusables/AppHeading';
import { whiteSpaces } from '@/utilities/globalspace';
import { BookUser, Car, CircleDollarSign, NotebookPen, Package, TicketsPlane } from 'lucide-react';
import ItineraSVG from '@/components/reusables/Itinera';

const StepsToRegister = () => {
  const steps = [
    {
      id: 1,
      title: 'Find a Package',
      icon: <Package className='h-6 w-6 text-brand-color-black' />
    },
    {
      id: 2,
      title: 'Select Payment Plan',
      icon: <CircleDollarSign className='h-6 w-6 text-brand-color-black' />
    },
    {
      id: 3,
      title: 'Submit Your Details',
      icon: <BookUser className='h-6 w-6 text-brand-color-black' />
    },
    {
      id: 4,
      title: 'Pay For Your Booking',
      icon: <NotebookPen className='h-6 w-6 text-brand-color-black' />
    },
    {
      id: 5,
      title: 'Receive Your Itinerary',
      icon: <TicketsPlane className='h-6 w-6 text-brand-color-black' />
    },
    {
      id: 6,
      title: 'Begin Your Journey',
      icon: <Car className='h-6 w-6 text-brand-color-black' />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className={`w-full ${whiteSpaces?.paddingX} py-4 md:py-16`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mb-14"
      >
        <AppHeading
          variant="h2"
          className="text-2xl sm:text-3xl md:text-4xl text-brand-color mb-4"
        >
          Our Booking Process is Hassle Free!
        </AppHeading>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {steps?.map((step) => (
          <motion.div
            key={step.id}
            variants={itemVariants}
            className="bg-background hover:bg-brand-color-light p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
             <div className='grid m-auto p-3 rounded-md bg-brand-color-light w-10 justify-center mb-4'>
              {step.icon}
              </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-8 flex items-center justify-center bg-brand-color-light text-brand-color-text-1 rounded-full text-sm font-semibold">
                {step.id}
              </span>
              <h3 className="text-lg font-semibold text-brand-color grid m-auto">
                {step.title}
              </h3>
            </div>
          </motion.div>
        ))}
        
      </motion.div>
    </section>
  );
};

export default StepsToRegister;
