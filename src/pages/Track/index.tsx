import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native'
import MapView from "react-native-maps";
// import { Marker } from 'react-native-maps';

const Track = () =>{
    const data = {
        type: 'onibus',
        title: 'ALIMENT. MORADAS DA HIPICA COSTA GAMA',
        subtitle: 'A87-2',
        favorite: true
    }
    return (
        <View >


            <View>
                <MapView 
                    style={{borderWidth: 3, height: "100%"}} 
                    initialRegion={{
                        latitude: 	-29.9228,
                        longitude: -51.1744,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
            <View style={styles.modal}>
                <View style={styles.line}/>
                <View style={styles.busCard}>
                    {data.type === 'onibus' && (
                        <Image style={styles.busCardImage} source={require('../../assets/yellow.png')}></Image>
                    )}
                    {data.type === 'lotacao' && (
                        <Image style={styles.busCardImage} source={require('../../assets/green.png')}></Image>
                    )}
                    <View style={{
                        display: "flex",
                        flexDirection: 'column',
                        width: "65%",
                        marginLeft: 15,
                    }}>
                        <Text style={styles.busCardTitle}>{data.title}</Text>
                        <Text style={styles.busCardSubtitle}>{data.subtitle}</Text>
                    </View>
                    {data.favorite && (
                        <Image style={{marginEnd: 10}}source={require('../../assets/star.png')}></Image>
                    )}
                    {!data.favorite && (
                        <Image style={{marginEnd: 10}}source={require('../../assets/empty-star.png')}></Image>
                    )}
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    line: {
        width: 100,
        height: 4,
        backgroundColor: '#BFBFBF',
        borderRadius: 8,
        marginBottom: 5,
        marginTop: 15,
    },
    modal: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: "absolute",
        width: '100%',
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center"
    },
    busCard: {
        width: '100%',
        padding: 10,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    busCardImage: {
        // flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    busCardTitle: {
        fontSize: 15,
        fontFamily: 'Poppins_500Medium',
        color: '#5F5F5F'
    },
    busCardSubtitle: {
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        color: '#9F9F9F',
        marginTop: -5,
    }
})

export default Track;