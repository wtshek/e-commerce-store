import React, { FC } from 'react';

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

interface CurrencyProps {
  value: number | string;
}

export const Currency: FC<CurrencyProps> = ({ value }) => {
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};
