import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle>11 сентября</GroupTitle>
        <GroupItem>
          <Avatar source={{uri: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/qHdiXjgemJRjGxYma5XON0rak_mVu7BTBgyY68z-0rEFNvHj1lhnbFa_LWmF_fM7-2YLYu-QJ19OzGDClWipLMmA.jpg?size=200x0&quality=96&crop=645,0,1914,1914&ava=1'}}/>
          <View>
            <Fullname>Наталья Гаупт</Fullname>
            <GrayText>Установка брекетов</GrayText>
          </View>
          <GroupDate>12:30</GroupDate>
        </GroupItem>
      </Group>
    </Container>
  );
}


const GroupDate = styled.Text`
      background: #e9f5ff;
      border-radius: 18px;
      font-weight: 600;
      font-size: 14px;
      color: #4294ff;
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

const GroupTitle = styled.Text`
    align-items: center;
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
`;

const GroupItem = styled.View`
    padding: 20px 0;
    flex-direction: row;
`;

const Group = styled.View`
    padding: 0 20px;
`;

const Container = styled.View`
    flex: 1;
    margin-top: 50px;
`;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
