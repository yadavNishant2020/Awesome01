import React from 'react';
import {
    View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark'


    return (
        <View style={styles.container}>
            <Text style={styles.Title}>Hello World</Text>
            <Text style={isDarkMode ? styles.whiteText : styles.whiteText}>Nish Here!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    },
    Title: {
        marginTop: 16,
        paddingVertical: 50,
        paddingHorizontal: 80,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 10,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default AppPro;
