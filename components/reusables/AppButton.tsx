'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ring } from 'ldrs';

// Register the loading animation
if (typeof window !== 'undefined') {
  ring.register();
}

export const LoadingIcon = ({ color = 'white' }) => {
  if (typeof window === 'undefined') return null;
  return <l-ring size={20} stroke={4} speed={2} color={color} bg-opacity="0" />;
};

interface ButtonProps {
  width?: string;
  height?: string;
  loading?: boolean;
  loadingSize?: string;
  iconSpacing?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  marginBottom?: string;
  marginRight?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

const AppButton: React.FC<ButtonProps> = ({
  type,
  width = 'auto',
  height = '45px',
  loading = false,
  loadingSize = '40px',
  iconSpacing = false,
  icon,
  iconPosition = 'end',
  className,
  onClick,
  disabled = false,
  children,
  variant = 'primary',
}) => {
  const [active, setActive] = useState(false);

  const handleMouseDown = () => setActive(true);
  const handleMouseUp = () => setActive(false);

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const baseClasses = `
    flex justify-${iconSpacing ? 'around' : 'center'} items-center
    text-sm font-normal
    rounded-full outline-none transition-all duration-300 select-none
    ${disabled || loading ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
    ${active ? 'shadow-md' : ''}
    ${loading ? 'w-[40px] h-[45px] p-[10px] rounded-full' : `w-[${width}] h-[${height}] p-5 rounded-full`}
  `;

  const variantClasses =
    variant === 'secondary'
      ? `bg-brand-color-light text-brand-color border-[0.5px] border-brand-color hover:bg-brand-color-light hover:text-brand-color-main ${disabled ? 'bg-opacity-70' : ''}`
      : `bg-brand-color-main text-brand-color-white ${disabled ? 'bg-opacity-70' : ''}`;

  const renderContent = () => {
    if (loading) return <LoadingIcon />;

    if (iconPosition === 'start') {
      return (
        <>
          {icon && <span className="mx-2">{icon}</span>}
          {children}
        </>
      );
    }

    return (
      <>
        {children}
        {icon && <span className="mx-2">{icon}</span>}
      </>
    );
  };

  return (
    <motion.button
      className={`
        ${baseClasses}
        ${variantClasses}
        ${className}
      `}
      type={type}
      onClick={handleClick}
      title={disabled ? 'Disabled' : ''}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      disabled={disabled || loading}
      initial={{ opacity: 1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
    >
      {renderContent()}
    </motion.button>
  );
};

export default AppButton;
