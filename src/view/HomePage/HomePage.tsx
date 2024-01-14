import React from 'react';
import MainContentSection from './MainContent/components/MainContentSection';
import CommonButton from '../common/CommonButton';
import MainContent from './MainContent/MainContent';
import AccountBalance from './components/AccountBalance/AccountBalance';
import PrepaidCard from './components/PrepaidCard/PrepaidCard';
import AddNewCard from './components/PrepaidCard/components/AddNewCard';
import Transactions from './components/Transactions/Transactions';
import BankAccountAndCards from './components/BankAccountAndCards/BankAccountAndCards';
import {
  AddMoneyWrap,
  BankAccountListWrap,
  BankAccountWrap,
  CardsWrap,
} from './HomePage.styles';

const bankAccountList = [
  {title: 'Signature RBC', cardNumber: '****3234', cardType: 'visa'},
  {title: 'TD Bank', cardNumber: '****0024', cardType: 'Debit'},
];

type TProps = {
  isMobile: boolean;
};
const HomePage = ({isMobile}: TProps) => {
  const sections = [
    {
      title: 'XEPPT Account Balance',
      content: <AccountBalance balance={191} flagImageSrc='/canada_flag.png' />,
    },
    {
      title: 'XEPPT Prepaid Card',
      content: (
        <CardsWrap>
          <PrepaidCard
            status='Inactive'
            cardNumber='4588777766660092'
            balance={0}
            background='/XEPPT_card_background_mobile.png'
          />
          <AddNewCard />
        </CardsWrap>
      ),
    },
    {
      title: 'Transactions',
      content: <Transactions isMobile={isMobile} />,
    },
  ];
  return (
    <MainContent>
      <div>
        {' '}
        {sections.map((section, index) => (
          <MainContentSection key={index} title={section.title}>
            {section.content}
          </MainContentSection>
        ))}
      </div>

      <BankAccountWrap>
        <BankAccountListWrap>
          {' '}
          <MainContentSection title='Bank Account and Cards'>
            <BankAccountAndCards bankAccountList={bankAccountList} />
          </MainContentSection>
        </BankAccountListWrap>

        <AddMoneyWrap>
          <CommonButton
            text='Add Money'
            textColor='#F5CC82'
            backgroundColor='#3D3D3D'
            height='50px'
          />
        </AddMoneyWrap>
      </BankAccountWrap>
    </MainContent>
  );
};

export default HomePage;
