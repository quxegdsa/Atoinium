import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer: React.FC = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Footer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        height: 60,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    footerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Footer;