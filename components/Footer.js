import React from 'react';
import { Text, View } from 'react-native';
import styles from '../style/Style';

export default Footer = () => {

    return (
        <View style={styles.footer}>
            <Text style={styles.title}>
                Author: Siiri Poropudas
            </Text>
        </View>
    )
}