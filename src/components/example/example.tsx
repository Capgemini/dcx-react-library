import React, { FC, HTMLAttributes, ReactChild } from 'react';
import styles from './example.module.css';
import styled from 'styled-components'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Example: FC<Props> = ({ children }) => (
  <div className={styles.daniele} data-testid="example">{children || `I'm just a demo component`}
    <Title>Styled component</Title>
  </div>
)

