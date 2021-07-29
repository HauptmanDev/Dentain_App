import React from 'react';
import styled from "styled-components/native/dist/styled-components.native.esm";

export const PatientScreen = (props) => {
    return (
        <Container>
            <PatientFullname></PatientFullname>
        </Container>
    );
}

PatientScreen.navigationOptions = {
    title: 'Карта пациента',
    headerTintColor: '#2A86FF',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8,
    }
}

const PatientFullname = styled.View`
    font-weight: 800;
    font-size: 28px;
    line-height: 30px;
`;

const Container = styled.View`
    padding: 25px;
`;