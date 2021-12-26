import {View, Text, StyleSheet, TextInput} from 'react-native'

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.title}>
                Go
                <Text style={styles.titleStrong}>Bus</Text>
            </Text>
            <Text style={styles.subtitle}>guia de transporte</Text>
            <TextInput defaultValue='Pesquisar linhas' style={styles.input}/>
        </View>
    )
};

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: '#FF99AB',
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    title: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'Poppins_400Regular'
    },
    titleStrong: {
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Poppins_700Bold'
    },
    subtitle : {
        fontSize: 15,
        color: 'white',
        marginTop: -10,
        fontFamily: 'Poppins_400Regular',
        marginBottom: 10
    },
    input: {
        color: '#CACACA',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 5,
        width: '100%'
    }
})

export default Header;