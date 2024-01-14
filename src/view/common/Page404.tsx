import React from 'react';
import {Button, Result} from 'antd';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Page404Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <Page404Wrap>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button type='primary' onClick={handleBackHome}>
            Back Home
          </Button>
        }
      />
    </Page404Wrap>
  );
};

export default Page404;
