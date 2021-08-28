import React from 'react';
import styled from "styled-components/native/dist/styled-components.native.esm";
import {GrayText} from "../components/GrayText";
import {Button} from "../components/Button";
import {Text, View} from "react-native";
import {Foundation} from '@expo/vector-icons';

export const PatientScreen = (props) => {
    const phoneButtonStyle = {backgroundColor: '#07E50A'}
    return (
        <View style={{flex: 1}}>
            <PatientDetails>
                <PatientFullname>Наталья Гаупт</PatientFullname>
                <GrayText>+375-29-218-63-00</GrayText>

                <PatientButtons>
                    <FormulaButtonView>
                        <Button>Фомула зубов</Button>
                    </FormulaButtonView>
                    <PhoneButtonView>
                        <Button style={phoneButtonStyle}>
                            <Foundation name="telephone" size={30} color="white"/>
                        </Button>
                    </PhoneButtonView>
                </PatientButtons>
            </PatientDetails>

            <PatientAppointments>

            </PatientAppointments>

        </View>
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

const FormulaButtonView = styled.View`
    flex: 1;
`;

const PhoneButtonView = styled.View`
    width: 45px;
    margin-left: 10px;
`

const PatientButtons = styled.View`
      flex: 1;
      flex-direction: row;
      margin-top: 20px;
`;

const PatientAppointments = styled.View`
      flex: 1;
`;

const Container = styled.View`
      flex: 1;
      padding: 25px;
`;

const PatientDetails = styled(Container)`
      flex: 0.3;
`;

const PatientFullname = styled.Text`
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
`;