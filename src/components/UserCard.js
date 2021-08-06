import React ,{ useState, useEffect }from 'react'
import { Text,View, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';
import Moment from 'moment';

const UserCard = () => {

    const [userData, setUserData]= useState();
    
    useEffect(async () => {
        const response = await fetch('http://localhost:4000/api/users.json');
        const data = await response.json();
        setUserData(data.data)
      }, []);
    
    const userDatas = userData ? userData : null
    
    return(
        <View>
        {userData &&
            <View style={{flex:10, flexDirection:'column'}}>
                {userDatas.map(userInfo => {    
                return (
                    <View  key={userInfo.id}>
                        <View style={localStyles.card}>
                            <View style={{flex:1}}>
                                <View style={localStyles.circle}/>
                            </View>
                            <View style={{flex:2,flexDirection: 'column'}}>
                                <View style={{flex:1}}>
                                    <Text style={localStyles.textTitle}>{userInfo.attributes.name}</Text>
                                    <Text style={localStyles.textSubTitle}>{userInfo.attributes.email}</Text>
                                    {Moment(userInfo.attributes.ends_at).isBefore(new Date()) &&
                                        <Text style={localStyles.textSubTitleDate}>
                                            {Moment(userInfo.attributes.starts_at).format('MMM DD h:mmA YYYY')}
                                            -
                                            {Moment(userInfo.attributes.ends_at).format('MMM DD h:mmA YYYY')}</Text>
                                    }
                                </View>
                                <View style={{flex:1, justifyContent: 'flex-end', marginBottom: 10,marginRight: 10}}>
                                    {userInfo.type === 'access_user' && userInfo.attributes.status === 'current' && 
                                        <View style={localStyles.activeBadge}>
                                            <Text style={localStyles.textActive}>ACTIVE</Text>
                                        </View>
                                    }
                                    {userInfo.type === 'access_guest' && Moment(userInfo.attributes.ends_at).isBefore(new Date()) &&
                                        <View style={localStyles.expiredBadge}>
                                            <Text style={localStyles.textExpired}>EXPIRED</Text>
                                        </View>
                                    }
                                    {userInfo.type === 'access_guest' && Moment(userInfo.attributes.ends_at).isAfter(new Date()) &&
                                    <View style={localStyles.upcomingBadge}>
                                        <Text style={localStyles.textUpcoming}>EXPIRED</Text>
                                    </View>
                                }
                                </View>
                            </View>
                        </View>
                    </View>
                )})}
            </View>
        }
{/* // the following are the examples given */}
            <View style={localStyles.card}>
                <View style={{flex:1}}>
                    <View style={localStyles.circle}/>
                </View>
                <View style={{flex:2,flexDirection: 'column'}}>
                    <View style={{flex:1, marginTop: '5%'}}>
                        <Text style={localStyles.textTitle}>Friend</Text>
                        <Text style={localStyles.textSubTitle}>friend@example.com</Text>
                    </View>
                    <View style={{flex:1, justifyContent: 'flex-end', marginBottom: 10,marginRight: 10}}>
                        <View style={localStyles.activeBadge}>
                            <Text style={localStyles.textActive}>ACTIVE</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={localStyles.card}>
                <View style={{flex:1}}>
                    <View style={localStyles.circle}/>
                </View>
                <View style={{flex:2,flexDirection: 'column'}}>
                    <View style={{flex:1, marginTop: '5%'}}>
                        <Text style={localStyles.textTitle}>Friend 2</Text>
                        <Text style={localStyles.textSubTitle}>friend@example.com</Text>
                        <Text style={localStyles.textSubTitleDate}>Aug 17 10:30-Aug 18 10:30</Text>
                    </View>
                    <View style={{flex:1, justifyContent: 'flex-end', marginBottom: 10,marginRight: 10}}>
                        <View style={localStyles.upcomingBadge}>
                            <Text style={localStyles.textUpcoming}>UPCOMING</Text>
                        </View>
                    </View>
                </View>
            </View>
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
        fontSize: 13,
        fontWeight: '600'
    },
    textSubTitleDate: {
        color: Colors.DarkGrey,
        fontSize: 15,
        fontWeight: '700'
    },
    textActive: {
        color: Colors.LockedGreen,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textUpcoming: {
        color: Colors.DarkYellow,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textExpired: {
        color: Colors.DarkRed,
        fontSize: 16,
        fontWeight: 'bold',
    },
    activeBadge: {
        backgroundColor: Colors.ActiveGreen,
        height: 25,
        width: 100,
        borderRadius:20,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'
    },
    upcomingBadge: {
        backgroundColor: Colors.UpcomingYellow,
        height: 25,
        width: 100,
        borderRadius:20,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'
    },
    expiredBadge: {
        backgroundColor: Colors.RadioRed,
        height: 25,
        width: 100,
        borderRadius:20,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default UserCard;