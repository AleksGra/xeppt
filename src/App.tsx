import React from 'react';
import {ConfigProvider} from 'antd';
import PageLayout from './view/PageLayout';
import './styles/index.css';
import theme from './styles/theme';
import {GlobalStyle} from './styles';
import CustomHeader from './view/Header/Header';
import useWindowSize from './hooks/useWindowSize';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './view/HomePage/HomePage';
import Page404 from './view/common/Page404';

function App() {
  const {width} = useWindowSize();
  const isMobile = width < 768;

  return (
    <ConfigProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <PageLayout>
          <CustomHeader isMobile={isMobile} />
          <Routes>
            <Route path='/' element={<HomePage isMobile={isMobile} />} />
            <Route path='/xepptCard' element={<Page404 />} />
            <Route path='/statements' element={<Page404 />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </PageLayout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
