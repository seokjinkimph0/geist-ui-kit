import React, { ReactElement } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface ValueButtonProps {
  onClick?: (event: any) => void;
  title: string;
  value?: string;
  type?: 'button' | 'submit';
  size?: 'big' | 'medium' | 'normal' | 'small';
  transparent?: boolean;
  mobileBig?: boolean;
  iconComponent?: ReactElement | ReactElement[];
  disabled?: boolean;
  className?: string;
}

export default function ValueButton({
  onClick,
  title,
  value,
  type = 'button',
  size = 'medium',
  transparent,
  mobileBig,
  iconComponent,
  disabled,
  className,
}: ValueButtonProps) {
  return (
    <button
      className={classNames(
        'Button',
        `Button__${size}`,
        { Button__mobileBig: mobileBig, Button__transparent: transparent },
        className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="Button__wrapper">
        {value && <span>{value}</span>}
        {iconComponent && iconComponent}
        <span>{title}</span>
      </div>
    </button>
  );
}
