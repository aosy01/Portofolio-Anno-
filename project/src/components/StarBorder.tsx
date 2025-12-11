import React, { CSSProperties, ElementType, ComponentPropsWithoutRef } from 'react';
import './StarBorder.css';

interface StarBorderProps<T extends ElementType = 'button'> {
  as?: T;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children?: React.ReactNode;
  style?: CSSProperties;
}

const StarBorder = <T extends ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  style,
  ...rest
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;