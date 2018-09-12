import React from 'react';
import { NativeModules, StyleSheet, View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

const CallManager = NativeModules.CallManager;

export default class CallUsScreen extends React.Component {
    makeCall = (number) => {
        CallManager.call(number);
    }
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
                <View style={styles.row}>
                    <FontAwesome name='phone' size={40} color='green' />
                    <Text style={styles.nameText}>David Revoledo: </Text>
                    <Text style={{fontSize: 18}}>+54 9 3413949771</Text>
                </View>
                <Button
                    onPress={() => this.makeCall("+54 9 3413949771")}
                    title="CALL DAVID!!!"
                    textStyle={{fontWeight: 'bold'}}
                    buttonStyle={{
                        backgroundColor: '#0096BE'
                    }}
                 />
                 <View style={styles.row}>
                    <FontAwesome name='phone' size={40} color='green' />
                    <Text style={styles.nameText}>Nicolas Milcoff: </Text>
                    <Text style={{fontSize:18}}>+54 9 3413787843</Text>
                 </View>
                 <Button
                    onPress={() => this.makeCall("+54 9 3413787843")}
                    title="CALL NICOLAS!!!"
                    textStyle={{fontWeight: 'bold'}}
                    buttonStyle={{
                        backgroundColor: '#0096BE'
                    }}
                />
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
        paddingTop: 10,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameText: {
        fontSize: 20,
        color: 'black',
        marginLeft: 10,
        fontWeight: 'bold'
    }
})