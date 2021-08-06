import React from 'react'
import {  SafeAreaView, ScrollView } from 'react-native'
import Colors from '../constants/Colors';
import UserCard from '../components/UserCard';

const UsersOptions = () => {
    return (
        <SafeAreaView style={{flex: 1,backgroundColor: Colors.ContainerGrey, alignItems: 'center'}}>
            <ScrollView style = {{width: '100%'}}>
                <UserCard/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default UsersOptions;