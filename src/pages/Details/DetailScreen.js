import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SearchIcon from '../../../assets/searchIcon.png'

const styles = StyleSheet.create({
    MainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFDA52'
    },
    contentContainer: {
        width: '100%',
        height: '95%',
        alignItems: 'center'
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
    searchIcon: {
        width: 125,
        height: 165,
    },
    TextBox: {
        width: '70%',
        marginTop:'5%'
    },
    button: {
        width: 216,
        height: 39,
        backgroundColor: '#2FAD63',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

const DetailScreen = ({navigation}) => {
    

    return (
        <View style={styles.MainContainer}>
            <Navbar />
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.MainHeading}>Minispiel</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: '6%',height:'9%' }}>
                    <Text style={styles.lhrText}>lhr spielt</Text>
                    <Text style={styles.einerText}>In einer Reihe</Text>
                </View>
                <View style={{marginTop:'5%'}}>
                    <Image source={SearchIcon} style={styles.searchIcon} />
                </View>
                <View style={styles.TextBox}>
                    <Text style={{fontSize:18 ,color:'black',padding:5, textAlign:'center'}}>n publishing and graphic design, Lorem ipsum is a placeholder text commonly
                        used to demonstrate the visual form of a document
                        or a typeface without relying on meaningful content.
                        Lorem ipsum may be used as a placeholder before the final
                        copy is available</Text>
                </View>
                <View style={{marginTop:'4%'}}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MenuSelectionScreen')}>
                            <Text style={styles.btnText}>Los geht's</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

export default DetailScreen
