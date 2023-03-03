import React from 'react';
import { Text, View } from 'react-native';
import styles from '../style/Style';

export default Header = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Mini-Yahtzee
            </Text>
        </View>
    )
}