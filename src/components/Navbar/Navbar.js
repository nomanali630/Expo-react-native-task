import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Menu from 'react-native-vector-icons/Ionicons'
import Message from 'react-native-vector-icons/Feather'
import IconBadge from 'react-native-icon-badge';

// i am using these icons because these were not provided to me 
const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 40,
        backgroundColor: '#FFDA52',
        marginTop: '8%',
        justifyContent: 'flex-end',
        alignItems: 'center',        
        flexDirection: 'row',
    },
    container:{
        alignItems:'center',
        width:'30%',
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    badgeCircle: {
        width: 25,
        height: 25,
        borderRadius: 100,
        backgroundColor: '#F9EE7D',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    TextCircle: {
        width: 19,
        height: 19,
        borderRadius: 100,
        backgroundColor: '#A27F43',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#F9EE7D',
        opacity: 0.7,
        textAlign: 'center'
    }
})

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <View style={styles.container}>
                <Text  >
                    <Message name='message-circle' size={22} color={'black'} />
                </Text>
                <View style={styles.badgeCircle}>

                    <IconBadge
                        MainElement={
                            <View style={styles.TextCircle} >
                                <Text style={styles.text} >A</Text>
                            </View>
                        }
                        BadgeElement={
                            <Text style={{ color: '#000', fontSize: 8 }}>10</Text>
                        }
                        IconBadgeStyle={
                            {
                                width: 14,
                                height: 14,
                                borderRadius: 100,
                                backgroundColor: '#FFFFFF',
                                margin: -10
                            }
                        }
                    />
                </View>
                <Text  >
                    <Menu name='md-menu-outline' size={25} color={'black'} />
                </Text>

            </View>
        </View>
    )
}

export default Navbar
