import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class CallUsScreen extends React.Component {
    static navigationOptions = {
        title: 'Call Us!',
        drawerLabel: 'Call Us',        
        drawerIcon: ({ tintColor }) => (
            <FontAwesome name='phone' size={24} color={tintColor} />
        ),
    };
    render() {
        return (
            <View style={styles.content}>
                <Text style={{fontSize: 18, color: 'black'}}>
                    +54 9 3413949771
                </Text>
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
})