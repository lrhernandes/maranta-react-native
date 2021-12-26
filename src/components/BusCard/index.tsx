import { View, Text, Image, StyleSheet } from "react-native";

const BusCard = (props:object) => {
    return (
        <View style={styles.busCard}>
            {props.bus.type === 'onibus' && (
                <Image style={styles.busCardImage} source={require('../../assets/yellow.png')}></Image>
            )}
            {props.bus.type === 'lotacao' && (
                <Image style={styles.busCardImage} source={require('../../assets/green.png')}></Image>
            )}
            <View style={{
                display: "flex",
                flexDirection: 'column',
                width: "65%",
            }}>
                <Text style={styles.busCardTitle}>{props.bus.title}</Text>
                <Text style={styles.busCardSubtitle}>{props.bus.subtitle}</Text>
            </View>
            {props.bus.favorite && (
                <Image style={{marginEnd: 10}}source={require('../../assets/star.png')}></Image>
            )}
            {!props.bus.favorite && (
                <Image style={{marginEnd: 10}}source={require('../../assets/empty-star.png')}></Image>
            )}
        
        </View>
    )
}

const styles = StyleSheet.create({
    busCard: {
        padding: 10,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        marginBottom: 10
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

export default BusCard;