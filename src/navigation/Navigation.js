import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, StyleSheet } from 'react-native'
import DevicesOptions from '../screens/DevicesOptions';
import UsersOptions from '../screens/UsersOptions';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createMaterialTopTabNavigator();
const width =350
const height = 30
   
export default function RootTab() {
  return (
      <Tab.Navigator
        initialRouteName= "DevicesOptions"
        tabBarOptions={{
          style: {
            height: height,
            width: width,
            borderRadius: 7,
            alignSelf: 'center',
            marginTop: 50,
            backgroundColor: "#B3B3B3",
          },
          indicatorStyle: {
            backgroundColor: null,
          },
        }}     
       >
        <Tab.Screen 
          name="Devices"
          component={DevicesOptions}
          options={{ 
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style= {{alignItems:'center', justifyContent: 'center'}}> 
                <View 
                  style = {{
                    backgroundColor: focused ? 'white' : 'transparent',
                    height: height-4, 
                      width: width/2,
                      borderRadius: 5,
                      marginLeft: 3,
                      marginTop: -10,
                      alignItems: 'center',
                      justifyContent: 'center',    
                      shadowColor: "#000",
                      shadowOffset: {
                          width: 2,
                          height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                  }}>
                    <Text style={localStyles.text}>Devices</Text>
                  </View>
              </View>
            )
          }}
          />
        <Tab.Screen
          name="Users"
          component={UsersOptions}
          options={{ 
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style= {{alignItems:'center', justifyContent: 'flex-start'}}> 
                <View 
                  style = {{
                    backgroundColor: focused ? 'white' : 'transparent',
                    height: height-4, 
                      width: width/2,
                      borderRadius: 5,
                      marginRight: 3,
                      marginTop: -10,
                      alignItems: 'center',
                      justifyContent: 'center',    
                      shadowColor: "#000",
                      shadowOffset: {
                          width: 2,
                          height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                  }}>
                    <Text style={localStyles.text}>Users</Text>
                </View>
              </View>
            )
          }}
          />
      </Tab.Navigator>
  );
}

const localStyles = StyleSheet.create({
  text: {
      color: Colors.Black,
      fontSize: 15,
      fontWeight:'600',


  }, 
});
  

