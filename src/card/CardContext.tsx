import React from 'react';

interface CardContextProps {
  layout?: 'vertical' | 'horizontal';
  variant?: 'default' | 'interact';
}

const CardContext = React.createContext<CardContextProps>({
  layout: 'vertical',
  variant: 'default',
});

export default CardContext;
