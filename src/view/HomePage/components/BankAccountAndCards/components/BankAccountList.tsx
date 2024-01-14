import React from 'react';
import {BankAccountItemContainer} from '../BankAccountAndCards.styles';

export type TBankAccountList = {
  title: string;
  cardNumber: string;
  cardType: string;
};

type TProps = {
  bankAccountList: TBankAccountList[];
};

const BankAccountList: React.FC<TProps> = ({bankAccountList}) => {
  return (
    <>
      {' '}
      {bankAccountList.map(({title, cardNumber, cardType}, index) => (
        <BankAccountItemContainer key={index}>
          {title} {cardType} ({cardNumber}){' '}
        </BankAccountItemContainer>
      ))}
    </>
  );
};

export default BankAccountList;
