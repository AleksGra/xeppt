import React from 'react';
import {hideCardNumbers, formatNumber} from '../../../../helpers/stringUtils';
import {
  AddButton,
  CardBalance,
  CardBalanceWrap,
  CardInfo,
  CardStatus,
  CardText,
  CardTextAddNewCard,
  PrepaidCardContainer,
} from './PrepaidCard.styles';

type TProps = {
  status?: string;
  background?: string;
  balance?: number;
  cardNumber?: string;
  isAddNewCard?: boolean;
  onAddButtonClick?: () => void;
};

const PrepaidCard = ({
  status,
  background,
  balance,
  cardNumber,
  isAddNewCard,
  onAddButtonClick,
}: TProps) => {
  return (
    <PrepaidCardContainer background={background} isAddNewCard={isAddNewCard}>
      <CardInfo>
        {isAddNewCard ? (
          <AddButton onClick={onAddButtonClick}>
            <img src='/add_24px.svg' alt='Status' />
          </AddButton>
        ) : (
          <CardStatus>{status}</CardStatus>
        )}

        <CardBalanceWrap>
          <CardBalance>{formatNumber(balance)}</CardBalance>
          {isAddNewCard ? (
            <CardTextAddNewCard>Order a new card</CardTextAddNewCard>
          ) : (
            <CardText>Available Balance</CardText>
          )}
        </CardBalanceWrap>
        <CardText>{hideCardNumbers(cardNumber)}</CardText>
      </CardInfo>
    </PrepaidCardContainer>
  );
};

export default PrepaidCard;
