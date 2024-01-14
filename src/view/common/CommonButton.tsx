import React from 'react';
import {Button} from 'antd';
import styled from 'styled-components';

type CustomButtonProps = {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  textColorHover?: string;
  backgroundColorHover?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  borderColor?: string;
  fontSize?: string;
};

const StyledAntdButton = styled(Button).attrs<CustomButtonProps>((props) => ({
  textColor: props.textColor || '#ffffff',
  backgroundColor: props.backgroundColor || 'transparent',
  textColorHover: props.textColorHover || '#ffffff',
  backgroundColorHover: props.backgroundColorHover || 'transparent',
  width: props.width || '100%',
  borderColor: props.borderColor || 'transparent',
  height: props.height || '36px',
  fontSize: props.fontSize || '14px',
}))<CustomButtonProps>`
  && {
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.backgroundColor};
    border-color: ${(props) => props.borderColor};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize};
    &:hover,
    &:focus {
      color: ${(props) => props.textColorHover};
      background-color: ${(props) => props.backgroundColorHover};
      border-color: ${(props) => props.backgroundColorHover};
    }
  }
  border-radius: 100px;
  font-weight: 500;
  line-height: 16px;
`;

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return <StyledAntdButton {...props}>{props.text}</StyledAntdButton>;
};

export default CustomButton;
