import React, { FC, HTMLAttributes, ReactChild } from 'react';
import styles from './example.module.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Example: FC<Props> = ({ children }) => 
 <div className={styles.daniele} data-testid="example">{children || `I'm just a demo component`}</div>
