import React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles'
import Navigation from 'components/organisms/Navigation/Navigation';
import { SearchBar } from '../../organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';



const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;