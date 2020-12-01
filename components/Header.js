import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

Header.defaultProps = {
    title: 'Welcome',
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        backgroundColor: 'blue',
    },
    text: {
        color:'white',
        fontSize: 23,
        textAlign: 'center',
    },
})
