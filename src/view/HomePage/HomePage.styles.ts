import styled from "styled-components";

export const AddMoneyWrap = styled.div`
  margin-top: 72px;
  grid-column: 1/3;
  padding-bottom: 18px;
  @media (min-width: 768px) {
    width: 320px;
    margin: 0 auto;
    padding-bottom: 30px;
  }
  @media (min-width: 1024px) {
    margin: 0;
  }
`;
export const CardsWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    padding-top: 0;
  }
`;
export const BankAccountWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding: 32px 0 0 16px;
  }
  @media (min-width: 1920px) {
    padding: 0 32px 32px;
  }
`;
export const BankAccountListWrap = styled.div`
  grid-column: 1/3;
  @media (min-width: 768px) {
    grid-column: 1/2;
  }
`;