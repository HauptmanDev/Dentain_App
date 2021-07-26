import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native'

export default function Group({user, diagnosis, active, time}) {
    return (
        <GroupBlock>
            <GroupItem>
                <Avatar source={{uri: user.avatar}}/>
                <View style={{flex: 1}}>
                    <Fullname>{user.fullname}</Fullname>
                    <GrayText>{diagnosis}</GrayText>
                </View>
                <GroupDate active={active}>{time}</GroupDate>
            </GroupItem>
        </GroupBlock>
    );
}

Group.defaultProps = {
    groupTitle: '',
    items: [],
}

const GroupDate = styled.Text`
      background: ${props => props.active ? '#2A86FF' : '#E9f5ff'};
      color: ${props => props.active ? '#FFF' : '#4294FF'};
      border-radius: 18px;
      font-weight: 600;
      font-size: 14px;
      height: 32px;
      width: 70px;
      text-align: center;
      line-height: 32px;
`;

const GrayText = styled.Text`
    font-style: normal;
    font-size: 16px;
    color: #8b979f;
`;

const Fullname = styled.Text`
    font-weight: 600;
    font-size: 16px;
`;

const Avatar = styled.Image`
    border-radius: 50px;
    width: 40px;
    height: 40px;
    margin-right: 15px;
`;

const GroupItem = styled.TouchableOpacity`
    padding: 20px 0;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #F3F3F3;
`;

const GroupBlock = styled.View`
    padding: 0 20px;
    margin-bottom: 25px;
`;