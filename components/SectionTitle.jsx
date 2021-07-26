import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

export default function SectionTitle({title}) {
    return (
        <GroupTitle>{title}</GroupTitle>
    );
}

const GroupTitle = styled.Text`
    font-weight: 800;
    font-size: 22px;
    color: #000000;
    margin-top: 25px;
    padding:0 20px;
`;