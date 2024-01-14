import React from 'react';
import { MainContentContainer } from './MainContent.styles';


type TProps = {children: React.ReactNode};

const MainContent = ({children}: TProps) => {
  return <MainContentContainer>{children}</MainContentContainer>;
};
export default MainContent;
