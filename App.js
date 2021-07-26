import React from 'react';
import {StyleSheet, Text, View, SectionList} from 'react-native';
import styled from 'styled-components/native'
import Appointment from "./components/Appointment";
import SectionTitle from "./components/SectionTitle";
import { Ionicons } from '@expo/vector-icons';


const DATA = [
    {
        title: '14 сентября',
        data: [
            {
                time: '12:30',
                diagnosis: 'Установка брекетов',
                active: true,
                user: {
                    fullname: 'Наталья Гаупт',
                    avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/qHdiXjgemJRjGxYma5XON0rak_mVu7BTBgyY68z-0rEFNvHj1lhnbFa_LWmF_fM7-2YLYu-QJ19OzGDClWipLMmA.jpg?size=200x0&quality=96&crop=645,0,1914,1914&ava=1'
                }
            },
            {
                time: '13:30',
                diagnosis: 'Установка брекетов',
                active: false,
                user: {
                    fullname: 'Кирилл Гаупт',
                    avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/MOJFO58IDfx7Ny1Q7BQ3MOYGE71ca_BK-JBi-JoC06fzDIlg2gWATr22b0RsC1cMqXgimehc.jpg?size=50x0&quality=96&crop=5,444,1716,1716&ava=1'
                }
            },
        ]
    },
    {
        title: '15 сентября',
        data: [
            {
                time: '12:30',
                diagnosis: 'Установка брекетов',
                active: false,
                user: {
                    fullname: 'Наталья Гаупт',
                    avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/qHdiXjgemJRjGxYma5XON0rak_mVu7BTBgyY68z-0rEFNvHj1lhnbFa_LWmF_fM7-2YLYu-QJ19OzGDClWipLMmA.jpg?size=200x0&quality=96&crop=645,0,1914,1914&ava=1'
                }
            },
            {
                time: '13:30',
                diagnosis: 'Установка брекетов',
                active: false,
                user: {
                    fullname: 'Кирилл Гаупт',
                    avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/MOJFO58IDfx7Ny1Q7BQ3MOYGE71ca_BK-JBi-JoC06fzDIlg2gWATr22b0RsC1cMqXgimehc.jpg?size=50x0&quality=96&crop=5,444,1716,1716&ava=1'
                }
            },
            {
                time: '12:30',
                diagnosis: 'Установка брекетов',
                active: false,
                user: {
                    fullname: 'Наталья Гаупт',
                    avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/qHdiXjgemJRjGxYma5XON0rak_mVu7BTBgyY68z-0rEFNvHj1lhnbFa_LWmF_fM7-2YLYu-QJ19OzGDClWipLMmA.jpg?size=200x0&quality=96&crop=645,0,1914,1914&ava=1'
                }
            },
            {
                time: '13:30',
                diagnosis: 'Установка брекетов',
                active: false,
                user: {
                    fullname: 'Кирилл Гаупт',
                    avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/MOJFO58IDfx7Ny1Q7BQ3MOYGE71ca_BK-JBi-JoC06fzDIlg2gWATr22b0RsC1cMqXgimehc.jpg?size=50x0&quality=96&crop=5,444,1716,1716&ava=1'
                }
            },
            {
                time: '12:30',
                diagnosis: 'Установка брекетов',
                active: false,
                user: {
                    fullname: 'Наталья Гаупт',
                    avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/qHdiXjgemJRjGxYma5XON0rak_mVu7BTBgyY68z-0rEFNvHj1lhnbFa_LWmF_fM7-2YLYu-QJ19OzGDClWipLMmA.jpg?size=200x0&quality=96&crop=645,0,1914,1914&ava=1'
                }
            },
            {
                time: '13:30',
                diagnosis: 'Установка брекетов',
                active: false,
                user: {
                    fullname: 'Кирилл Гаупт',
                    avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/MOJFO58IDfx7Ny1Q7BQ3MOYGE71ca_BK-JBi-JoC06fzDIlg2gWATr22b0RsC1cMqXgimehc.jpg?size=50x0&quality=96&crop=5,444,1716,1716&ava=1'
                }
            },
        ]
    },
]

export default function App() {

    const shadowBtn = {
        shadowOffset: {
            width: 0,
            height: 5,
            elevation: 4,
        },
    }
    return (
        <Container>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <Appointment {...item}/>}
                renderSectionHeader={({section: {title}}) => <SectionTitle title={title}/>}
            />
            <PlusButton style={shadowBtn}>
                <Ionicons name="add" size={35} color="white" />
            </PlusButton>
        </Container>
    );
}

const PlusButton = styled.TouchableOpacity`
    position: absolute;
    right: 15px;
    bottom: 25px;
    border-radius: 50px;
    height: 64px;
    width: 64px;
    background: #2A86FF;
    align-items: center;
    justify-content: center;
    shadow-color: #000000;
    shadow-opacity: 0.7;
    shadow-radius: 3.5;
`;

const Container = styled.View`
    flex: 1;
    margin-top: 30px;
`;


// export default function App() {
//   return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <StatusBar style="auto" />
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
