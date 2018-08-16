import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';

export default class ReceiveParamsScreen extends React.Component {
    static navigationOptions = {
        title: 'Page with parameters'
    };
    render() {
        const { navigation } = this.props;
        const sendedText = navigation.getParam('sendedText', 'Empty');
        return(
            <View style={styles.content}>
                <Text style={{ fontSize: 14, marginTop: 30, marginLeft: 15 }}>Text you send is: </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 30 }}>{JSON.stringify(sendedText)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    }
});
