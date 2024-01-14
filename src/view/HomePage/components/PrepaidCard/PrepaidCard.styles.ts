import styled from "styled-components";
import {Button} from "antd";

export const PrepaidCardContainer = styled.div<{
    background?: string;
    isAddNewCard?: boolean;
}>`
  width: 256px;
  height: 160px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: ${(props) =>
    props.isAddNewCard ? '#f8f6f1' : `url(${props.background})`};
  background-size: cover;
  color: ${(props) => (props.background ? '#fff' : '#282828')};
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: absolute;
  left: 16px;
  top: 15px;
`;
export const CardStatus = styled.div`
  display: flex;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #fdf1dc;
  color: #be8317;
  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
`;
export const CardBalanceWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardBalance = styled.div`
  color: #f5f5f5;
  font-size: 20px;
  font-weight: 700;
`;
export const CardText = styled.div`
  font-size: 14px;
  line-height: 21px;
`;
export const CardTextAddNewCard = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
export const AddButton = styled(Button)`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #3d3d3d;
`;
 export const AddNewCardContainer = styled.div`
  margin-top: 24px;
  @media (min-width: 768px) {
    margin: 0 0 0 24px;
  }
`;