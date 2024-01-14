import React, {useState} from 'react';
import {Dropdown, MenuProps} from 'antd';
import HeaderMenu from './components/HeaderMenu';
import {getInitials} from '../../helpers/stringUtils';
import {useNavigate} from 'react-router-dom';
import {
  ExpandWrap,
  LanguageDropdown,
  LanguageTitle,
  LogoContainer,
  NotificationWrap,
  StyledHeader,
  UserContainer,
  UserNameWrap,
} from './Header.styles';

type TProps = {
  isMobile: boolean;
};
const CustomHeader = ({isMobile}: TProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState('FR');
  const navigate = useNavigate();
  const userProfile = {
    userFirstName: 'Peter',
    userLastName: 'Morgan',
    userAvatar: '/profile_icon.png',
    userId: 1,
  };
  const {userFirstName, userLastName, userAvatar} = userProfile;

  const items = [
    {label: 'HOME', key: 'home'},
    {label: 'XEPPT Card', key: 'xeppt'},
    {label: 'STATEMENTS', key: 'statements'},
  ];
  const languageItems = [
    {label: 'English', key: 'en'},
    {label: 'Français', key: 'fr'},
  ];

  const onClick: MenuProps['onClick'] = ({key}) => {
    if (key === 'home') {
      navigate('/');
    } else if (key === 'xeppt') {
      navigate('/xeppzztCard');
    } else if (key === 'statements') {
      navigate('/statements');
    }
  };
  const handleLanguageChange: MenuProps['onClick'] = ({key}) => {
    setSelectedLanguage(key);
  };
  return (
    <StyledHeader>
      {isMobile && (
        <Dropdown menu={{items, onClick}} trigger={['click']}>
          <img
            src='/menu_24px.svg'
            alt='Menu'
            style={{width: '30px', padding: '21px 0'}}
          />
        </Dropdown>
      )}
      <LogoContainer>
        <img
          src='/Logo%20-%20XEPPT%20-%20transparent.svg'
          alt='Logo'
          style={{width: '100px'}}
        />
        {!isMobile && <HeaderMenu />}
      </LogoContainer>
      <UserContainer>
        <LanguageDropdown
          menu={{items: languageItems, onClick: handleLanguageChange}}
          trigger={['click']}
        >
          <LanguageTitle>{selectedLanguage}</LanguageTitle>
        </LanguageDropdown>
        <NotificationWrap>
          {' '}
          <img src='/notifications.svg' alt='Notification' />
        </NotificationWrap>
        {!isMobile && (
          <>
            <NotificationWrap>
              {userAvatar ? (
                <img src={`${userAvatar}`} alt='User_avatar' />
              ) : (
                getInitials(userFirstName, userLastName)
              )}
            </NotificationWrap>
            <UserNameWrap>{`${userFirstName} ${userLastName}`}</UserNameWrap>
            <ExpandWrap>
              {' '}
              <img src='/expand_24px.svg' alt='Expand' />
            </ExpandWrap>
          </>
        )}
      </UserContainer>
    </StyledHeader>
  );
};

export default CustomHeader;
