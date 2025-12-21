import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const buttonClassName = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};
