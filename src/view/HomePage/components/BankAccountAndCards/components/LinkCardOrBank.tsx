import {AddButton} from '../../PrepaidCard/PrepaidCard.styles';
import React from 'react';
import {LinkText, LinkWrap} from '../BankAccountAndCards.styles';

const LinkCardOrBank = () => {
  const handleAddButtonClick = () => {
    console.log('Add bank button clicked!');
  };

  return (
    <LinkWrap onClick={handleAddButtonClick}>
      <AddButton>
        <img src='/add_24px.svg' alt='Add' />
      </AddButton>
      <LinkText>Link a card or bank</LinkText>
    </LinkWrap>
  );
};

export default LinkCardOrBank;
