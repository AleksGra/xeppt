import React from 'react';
import PrepaidCard from '../PrepaidCard';
import {AddNewCardContainer} from '../PrepaidCard.styles';

const AddNewCard = () => {
  const handleAddButtonClick = () => {
    console.log('Add card button clicked!');
  };

  return (
    <AddNewCardContainer>
      <PrepaidCard isAddNewCard onAddButtonClick={handleAddButtonClick} />
    </AddNewCardContainer>
  );
};
export default AddNewCard;
