import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Colors from '../constants/Colors';
import DeviceCard from '../components/DeviceCard';


const DevicesOptions = () => {
    return (
        <SafeAreaView style={{flex: 1,backgroundColor: Colors.ContainerGrey, alignItems: 'center'}}>
            <ScrollView style = {{width: '100%'}}>
                <DeviceCard/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DevicesOptions;