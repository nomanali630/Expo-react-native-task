import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import FrontHome from '../../../assets/frontHome.png'
import UserImage from '../../../assets/user-icon.png'

const styles = StyleSheet.create({
    backgroundContainer: {
        width: '100%',
        height: '100%'
    },
    container: {
        alignItems: 'center',
        height: '95%',

    },
    homeImg: {
        width: 50,
        height: 100
    },
    MainHeading: {
        fontSize: 36,
        fontWeight: 'bold',
        padding: '2%'
    },
    lhrText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    einerText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    teamText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    fairText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    iconContainer: {
        flexDirection: 'row',
        width: 200,
        justifyContent: 'space-around',
        
    },
    icon: {
        width: 42,
        height: 42,
        borderRadius: 100
    },
    button: {
        width: 216,
        height: 39,
        backgroundColor: '#FFDA52',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:'7%'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    upperSection: {
        width: '100%',
        height: '30%',
        backgroundColor: '#FFDA52',
        alignItems: 'center'
    },
    LowerSection:{
        width: '100%',
        height: '65%',
        backgroundColor: '#FF9E53',
        alignItems: 'center',
        flexDirection:'column',
        justifyContent:'space-around'
    }

})



const HomeScreen = ({navigation}) => {
    return (
        <View style={{backgroundColor:'#FFDA52'}}>
                <Navbar />
                <View style={styles.container}>
                    <View style={styles.upperSection}>
                    <View>
                        <Text style={styles.MainHeading}>Minispiel</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: '10%' }}>
                        <Text style={styles.lhrText}>lhr spielt</Text>
                        <Text style={styles.einerText}>In einer Reihe</Text>
                    </View>
                    </View>
                    <View style={styles.LowerSection}>

                    <View>
                        <Text style={styles.teamText}>lhr speilt team</Text>
                    </View>
                    <View >
                        <Image source={FrontHome} style={styles.homeImg} />
                    </View>
                    <View >
                        <Text style={styles.fairText}>Team fair</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image source={UserImage} style={styles.icon} />
                        <Image source={UserImage} style={styles.icon} />
                        <Image source={UserImage} style={styles.icon} />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
                            <Text style={styles.btnText}>Weiter</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
        </View>
    )
}

export default HomeScreen
