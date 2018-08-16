import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class EmailUsScreen extends React.Component {
    static navigationOptions = {
        title: 'Email Us!',
        drawerLabel: 'Email Us',
        drawerIcon: ({ tintColor }) => (
            <FontAwesome name='envelope-o' size={24} color={tintColor} />
        ),
    }
    render() {
        return (
            <View style={styles.content}>
                <Text>info@d-genix.com</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingTop: 30,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});