import styled from 'styled-components';

export const TransactionsButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;
`;
export const ButtonWrap = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 16px;
`;
export const TransactionsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1024px) {
    padding-bottom: 54px;
  }
`;

export const TransactionItemContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 8px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e1dcd0;
  gap: 8px;
`;

export const TransactionIcon = styled.img<{isPayment?: boolean}>`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 24px;
  background-color: ${(props) => (props.isPayment ? '#FDF1DC' : '#F5CC82')};
`;

export const TransactionInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TransactionTitle = styled.div`
  font-weight: 600;
  line-height: 24px;
  font-size: 16px;
`;
export const TransactionText = styled.div`
  font-size: 12px;
`;
export const TransactionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TransactionsAmount = styled.div<{isPayment: boolean}>`
  display: flex;
  white-space: nowrap;
  color: ${(props) => (props.isPayment ? '#4e4c47' : '#0F9D58')};
  font-size: 16px;
  font-weight: 700;
`;
export const ShowMoreWrap = styled.div`
  display: flex;
  justify-content: center;
`;