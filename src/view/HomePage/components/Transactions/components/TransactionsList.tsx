import React from 'react';
import {formatNumber} from '../../../../../helpers/stringUtils';
import CommonButton from '../../../../common/CommonButton';
import {
  ShowMoreWrap,
  TransactionIcon,
  TransactionInfo,
  TransactionInfoContainer,
  TransactionItemContainer,
  TransactionsAmount,
  TransactionsListContainer,
  TransactionText,
  TransactionTitle,
} from '../Transactions.styles';

type Transaction = {
  isPayment: boolean;
  title: string;
  information: string;
  amount: number;
};

type TProps = {
  transactions: Transaction[];
  isMobile: boolean;
};

const TransactionsList: React.FC<TProps> = ({transactions, isMobile}) => {
  return (
    <TransactionsListContainer>
      {transactions.map(({isPayment, title, information, amount}, index) => (
        <TransactionItemContainer key={index}>
          <TransactionInfoContainer>
            <TransactionIcon
              isPayment={isPayment}
              src={
                isPayment ? '/credit_card.svg' : '/account_balance_wallet.svg'
              }
              alt='${transaction_icon'
            />
            <TransactionInfo>
              <TransactionTitle>{title}</TransactionTitle>
              <TransactionText>{information}</TransactionText>
            </TransactionInfo>
          </TransactionInfoContainer>
          <TransactionsAmount isPayment={isPayment}>
            {isPayment ? '-' : '+'}
            {formatNumber(amount)}
          </TransactionsAmount>
        </TransactionItemContainer>
      ))}
      {isMobile && (
        <ShowMoreWrap>
          <CommonButton
            text='Show more'
            width='140px'
            textColor='#F5CC82'
            backgroundColor='#353535'
            height='40px'
            fontSize='16px'
          />
        </ShowMoreWrap>
      )}
    </TransactionsListContainer>
  );
};

export default TransactionsList;
