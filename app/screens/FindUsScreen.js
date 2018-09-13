import React from 'react';
import { StyleSheet, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class FindUsScreen extends React.Component {
    static navigationOptions = {
        title: 'Find Us!',
        drawerLabel: 'Find Us',
        drawerIcon: ({ tintColor }) => (
            <FontAwesome name='map-marker' size={24} color={tintColor} />
        ),
    };
    render() {
        return (
            <View style={styles.content}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    }
})