import styled from 'styled-components';
import {Dropdown, Layout} from 'antd';

const {Header} = Layout;
export const StyledHeader = styled(Header)`
  width: 100%;
  background: #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 27px;
  position: fixed;
  top: 0;
  z-index: 1000;

  @media (min-width: 768px) {
    height: 96px;
  }
  @media (min-width: 1920px) {
    height: 136px;
    padding-left: 260px;
    padding-right: 260px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const LanguageDropdown = styled(Dropdown)`
  div {
    cursor: pointer;
  }
`;
export const NotificationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdf1dc;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
`;

export const ExpandWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LanguageTitle = styled.div`
  color: #f5cc82;
  line-height: 21px;
  text-transform: uppercase;
`;
export const UserNameWrap = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  color: #f5cc82;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 35px;
  @media (min-width: 768px) {
    margin-right:0
  }
  @media (min-width: 1920px) {
   padding-left: 85px;
  }
`;

export const MenuButton = styled.button<{isActive: boolean}>`
  background: ${({isActive}) => (isActive ? '#282828' : 'transparent')};
  color: #f5cc82;
  font-size: 18px;
  width: 100%;
  border-radius: 30px;
  height: 43px;
  border: none;
  padding: 8px 28px;
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
