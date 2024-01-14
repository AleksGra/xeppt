import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {ButtonWrap, MenuButton} from '../Header.styles';

const menuItems = [
  {to: '/', text: 'Home'},
  {to: '/xepptCard', text: 'XEPPT Card'},
  {to: '/statements', text: 'Statements'},
];

const HeaderMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ButtonWrap>
      {menuItems.map((menuItem, index) => (
        <Link key={index} to={menuItem.to}>
          <MenuButton
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {menuItem.text}
          </MenuButton>
        </Link>
      ))}
    </ButtonWrap>
  );
};

export default HeaderMenu;
