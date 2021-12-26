import React from "react";
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { RectButton } from "react-native-gesture-handler";
import BusCard from "../../components/BusCard";
import {useNavigation} from "@react-navigation/native"

const Home = () => {
    const navigation = useNavigation();

    function handleOpenBus(){
        navigation.navigate('Track');
    }

    return (
        <ScrollView style={{paddingHorizontal: 10}}>
            {/* <Image source={require('../../assets/map.png')}></Image> */}
            <View>

                <View style={{
                    display: "flex", 
                    flexDirection: 'row', 
                    justifyContent: "center",
                    marginVertical: 20
                }}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <View style={styles.choiceWrapper}>
                            <Image source={require('../../assets/yellow.png')}></Image>
                            <Text style={styles.choiceText}>Ônibus</Text>
                        </View>
                        <View style={styles.choiceWrapper}>
                            <Image source={require('../../assets/green.png')}></Image>
                            <Text style={styles.choiceText}>Lotação</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Linhas favoritas</Text>
                <View style={{marginBottom: 20}}>
                    <RectButton onPress={handleOpenBus}>
                        <BusCard bus={{
                            type: 'onibus',
                            title: 'ALIMENT. MORADAS DA HIPICA COSTA GAMA',
                            subtitle: 'A87-2',
                            favorite: true
                        }}/>
                    </RectButton>
                    <RectButton onPress={handleOpenBus}>
                        <BusCard bus={{
                            type: 'lotacao',
                            title: 'ALTO TERESOPOLIS - VIA PRAIA DE BELAS',
                            subtitle: '20.5-2',
                            favorite: true
                        }}/>
                    </RectButton>
                </View>
                <Text style={styles.sectionTitle}>Todas as linhas</Text>
                <View>
                    <RectButton onPress={handleOpenBus}>
                        <BusCard bus={{
                            type: 'onibus',
                            title: 'ALIMENT. MORADAS DA HIPICA COSTA GAMA',
                            subtitle: 'A87-2',
                            favorite: false
                        }}/>
                    </RectButton>
                    <RectButton onPress={handleOpenBus}>
                        <BusCard bus={{
                            type: 'lotacao',
                            title: 'ALTO TERESOPOLIS - VIA PRAIA DE BELAS',
                            subtitle: '20.5-2',
                            favorite: false
                        }}/>
                    </RectButton>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    choiceText: {
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        color: '#5F5F5F'
    },
    choiceWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width:  100
    },
    sectionTitle: {
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        color: '#5F5F5F',
        marginBottom: 5
    },
  });

export default Home;