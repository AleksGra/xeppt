import React from 'react';
import LinkCardOrBank from './components/LinkCardOrBank';
import {TBankAccountList} from './components/BankAccountList';
import BankAccountListComp from './components/BankAccountList';

type TProps = {
  bankAccountList: TBankAccountList[];
};
const BankAccountAndCards = ({bankAccountList}: TProps) => {
  return (
    <>
      <BankAccountListComp bankAccountList={bankAccountList} />
      <LinkCardOrBank />
    </>
  );
};
export default BankAccountAndCards;
