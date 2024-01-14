import React from 'react';
import {Title} from '../MainContent.styles';

type TProps = {
  title: string;
  children: React.ReactNode;
};
const MainContentSection = ({title, children}: TProps) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};
export default MainContentSection;
