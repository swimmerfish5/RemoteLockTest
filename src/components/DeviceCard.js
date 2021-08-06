import React ,{ useState, useEffect } from 'react'
import { Text,View, Image, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';
import { Switch } from 'react-native-switch';

const DeviceCard = () => {

    const [deviceData, setDeviceData] = useState(false)

    useEffect(async () => {
        try {
            const response = await fetch('http://localhost:4000/api/devices.json');
            const data = await response.json();
            const _data = data.data
            const numberDevices = _data.length
            if (_data) {
                let datas = []
                for (let i = 0; i < numberDevices; i++) {
                    datas[i] = {
                        id: _data[i].id,
                        locked : _data[i].attributes.state === 'locked',
                        name :  _data[i].attributes.name,
                        model_number : _data[i].attributes.model_number
                    }
                }
                setDeviceData(datas)
            }
        } 
        catch(err) {
            console.log("Error fetching data-----------", err);
        }
      }, []);
      
    const toggleSwitch = (id, val) => {
            index = deviceData.findIndex(x=> x.id === id)
            newDeviceData = deviceData.slice()
            newDeviceData[index].locked = val
            setDeviceData(newDeviceData)
    }

    return(

        <View>
            {deviceData &&
            <View style={{flex:10, flexDirection:'column'}}>
                {deviceData.map(deviceInfo => {  
                return (
                    <View  key={deviceInfo.id}>
                        <View style={localStyles.card}>
                            <View style={{flex:1}}>
                                <View style={localStyles.circle}/>
                            </View>
                            <View style={{flex:1,flexDirection: 'column'}}>
                                <View style={{flex:1, marginTop: '15%'}}>
                                    <Text style={localStyles.textTitle}>{deviceInfo.name}</Text>
                                    <Text style={localStyles.textSubTitle}>{deviceInfo.model_number}</Text>
                                </View>
                                <View style={{flex:1, justifyContent:'flex-end'}}>
                                    <Switch
                                        value={deviceInfo.locked}
                                        onValueChange={(val) => toggleSwitch(deviceInfo.id, val)}
                                        disabled={false}
                                        activeText={''}
                                        inActiveText={''}
                                        circleSize={25}
                                        barHeight={30}
                                        circleBorderWidth={0}
                                        backgroundActive={Colors.RadioGreen}
                                        backgroundInactive={Colors.RadioRed}
                                        circleActiveColor={Colors.White}
                                        circleInActiveColor={Colors.White}
                                        changeValueImmediately={true}
                                        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                        switchWidthMultiplier={2.4} // multipled by the `circleSize` prop to calculate total width of the Switch
                                        switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                    />
                                </View>
                            </View>
                            <View style={{flex:1, height:'100%',justifyContent:'flex-end'}}>
                                <View style={{height:'25%',  alignItems: 'center'}}>
                                    {deviceInfo.locked ? 
                                        <View style={{flex:1,flexDirection: 'row'}}>
                                            <Image source={require('../components/images/lockLocked.png')} 
                                                style={localStyles.imageLocked}/> 
                                            <Text style={localStyles.textLocked}>Locked</Text>
                                        </View>
                                        :
                                        <View style={{flex:1,flexDirection: 'row'}}>
                                            <Image source={require('../components/images/lockUnlocked.png')} 
                                                style={localStyles.imageUnlocked}/> 
                                            <Text style={localStyles.textUnlocked}>Unlocked</Text>
                                        </View>
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                )})}
            </View>  
            }
       </View>  
    )  
}

const localStyles = StyleSheet.create({
    card: {
      width: '95%',
      height: 150,
      justifyContent:'center',
      alignItems: 'center',
      flexDirection: 'row', 
      margin: 10,
      backgroundColor: Colors.White,
      padding: 10,
      borderRadius:2,
  
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    circle: {
        width: 100,
        height: 100,
        justifyContent:'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: Colors.LightGrey,
        padding: 10,
        borderRadius:100,
        borderWidth: 2,
        borderColor: Colors.MidGrey,
      },
    textTitle: {
        color: Colors.Black,
        fontSize: 25,
        fontWeight: 'bold'
    },
    textSubTitle: {
        color: Colors.DarkGrey,
        fontSize: 15,
        fontWeight: '600'
    },
    textLocked: {
        color: Colors.LockedGreen,
        fontSize: 20,
        alignSelf: 'center'
    },
    textUnlocked: {
        color: Colors.UnlockedRed,
        fontSize: 20,
        alignSelf: 'center'
    },
    imageLocked: {
        tintColor: Colors.LockedGreen,
        height: '90%',
        width: '20%',
        marginRight: 5
    },
    imageUnlocked: {
        tintColor: Colors.UnlockedRed,
        height: '90%',
        width: '20%',
        marginRight: 5
    },
});
  
export default DeviceCard;
