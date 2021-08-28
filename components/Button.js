import React from 'react';
import styled from "styled-components/native/dist/styled-components.native.esm";

export const Button = ({children, style}) => {
    return (
        <ButtonWrapper style={style}>
            <ButtonText>{children}</ButtonText>
        </ButtonWrapper>
    );
}

const ButtonWrapper = styled.TouchableOpacity`
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      background: #2A86FF;
      height: 45px;
`;

const ButtonText = styled.Text`
      color: white;
      font-weight: 500;
      font-size: 16px;
`;