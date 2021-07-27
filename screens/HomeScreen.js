import React from 'react';
import {SectionList} from "react-native";
import Appointment from "../components/Appointment";
import SectionTitle from "../components/SectionTitle";
import {Ionicons} from "@expo/vector-icons";
import styled from "styled-components/native/dist/styled-components.native.esm";

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

export class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Пациенты',
        headerTintColor: '#2A86FF',
        headerStyle: {
            elevation: 0.8,
            shadowOpacity: 0.8,
        }
    }

    render() {
        const shadowBtn = {
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowColor: '#000000',
            shadowOpacity: 0.7,
            shadowRadius: 3.5,
            elevation: 4,
        };
        const { navigation } = this.props;
        return (
            <Container>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Appointment navigate={navigation.navigate} {...item}/>}
                    renderSectionHeader={({section: {title}}) => <SectionTitle title={title}/>}
                />
                <PlusButton style={shadowBtn}>
                    <Ionicons name="add" size={35} color="white"/>
                </PlusButton>
            </Container>
        )
    }
}

// export const HomeScreen = () => {
//
//     const shadowBtn = {
//         shadowOffset: {
//             width: 0,
//             height: 5,
//         },
//         shadowColor: '#000000',
//         shadowOpacity: 0.7,
//         shadowRadius: 3.5,
//         elevation: 4,
//     };
//
//     return (
//         <Container>
//             <SectionList
//                 sections={DATA}
//                 keyExtractor={(item, index) => index}
//                 renderItem={({item}) => <Appointment {...item}/>}
//                 renderSectionHeader={({section: {title}}) => <SectionTitle title={title}/>}
//             />
//             <PlusButton style={shadowBtn}>
//                 <Ionicons name="add" size={35} color="white"/>
//             </PlusButton>
//         </Container>
//     );
// }

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
`;

const Container = styled.View`
    flex: 1;
`;
