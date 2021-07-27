import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomeScreen} from "./screens/HomeScreen";
import {PatientScreen} from "./screens/PatientScreen";

const RootStack = createStackNavigator({
    Home: {screen: HomeScreen},
    Patient: {screen: PatientScreen},
});

const AppContainer = createAppContainer(RootStack);

export default function App() {
    return <AppContainer />
}

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
