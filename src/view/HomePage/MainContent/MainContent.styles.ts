import styled from "styled-components";

 export const MainContentContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 72px 18px 18px;

  @media (min-width: 768px) {
    padding-top: 96px;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;

    grid-gap: 18px;
  }
  @media (min-width: 1920px) {
    padding: 208px 265px 72px;
  }
`;
export const Title = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1920px) {
    margin-top: 64px;
    &:first-of-type {
      margin-top: 0;
    }
  }
`;