import React from 'react';

import {formatNumber} from '../../../../helpers/stringUtils';
import {
  AccountBalanceCard,
  ContentWrap,
  StyledBalance,
  StyledFlag,
} from './AccountBalance.styles';

type TProps = {
  balance: number;
  flagImageSrc: string;
};
const AccountBalance = ({balance, flagImageSrc}: TProps) => {
  return (
    <AccountBalanceCard>
      <ContentWrap>
        <StyledFlag>
          <img src={flagImageSrc} alt='Flag' />
        </StyledFlag>
        <StyledBalance>{formatNumber(balance)}</StyledBalance>
      </ContentWrap>
    </AccountBalanceCard>
  );
};

export default AccountBalance;
