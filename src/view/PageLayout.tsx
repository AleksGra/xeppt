import React from 'react';
import {Layout} from 'antd';
import styled from 'styled-components';

const {Content} = Layout;
const StyledContent = styled(Content)`
  height: auto;
`;
const layoutStyle: React.CSSProperties = {
  height: '100vh',
  background: '#ffffff',
};

type TProps = {
  children: React.ReactNode;
};

const PageLayout = ({children}: TProps) => {
  return (
    <Layout style={layoutStyle}>
      <StyledContent>{children}</StyledContent>
    </Layout>
  );
};
export default PageLayout;
