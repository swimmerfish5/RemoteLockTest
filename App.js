
import React from 'react';
import { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Navigator from './src/navigation/Navigation'



const App: () => Node = () => {
  return (
    <NavigationContainer>
       <Navigator/>
    </NavigationContainer>
  )
};
export default App;
