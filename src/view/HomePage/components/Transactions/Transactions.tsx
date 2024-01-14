import CommonButton from '../../../common/CommonButton';
import React from 'react';
import TransactionsList from './components/TransactionsList';
import {ButtonWrap, TransactionsButtons} from './Transactions.styles';

const transactions = [
  {
    isPayment: true,
    title: 'Cineplex Inc.',
    information: 'Sept 24,Payment',
    amount: 42.5,
  },
  {
    isPayment: false,
    title: 'RBC Royal Bank',
    information: 'Aug 1, Transfer from bank',
    amount: 500,
  },
  {
    isPayment: true,
    title: 'Skyline Restaurant',
    information: 'Aug 1, Payment',
    amount: 110.45,
  },
];
type TProps = {
  isMobile: boolean;
};
const Transactions = ({isMobile}: TProps) => {
  return (
    <>
      <TransactionsButtons>
        <ButtonWrap>
          <CommonButton text='All' backgroundColor='#DB9E2F' width='68px' />
          <CommonButton
            text='XEPPT Card'
            width='140px'
            textColor='#DB9E2F'
            borderColor='#DB9E2F'
          />
        </ButtonWrap>
        {!isMobile && (
          <CommonButton
            text='Show more'
            width='140px'
            textColor='#F5CC82'
            backgroundColor='#353535'
            height='40px'
            fontSize='16px'
          />
        )}
      </TransactionsButtons>
      <TransactionsList transactions={transactions} isMobile={isMobile} />{' '}
    </>
  );
};

export default Transactions;
