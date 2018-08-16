import React from 'react';
import { StatusBar, Keyboard, StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Test App D-Genix',
    }
    state =  { text: ''};
    render() {
        return (
            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={styles.content}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#2A97BB" />
                    <Text style={styles.titleStyle}>Testing App Title</Text>
                    <Button
                        title="About Us"
                        onPress={() => this.props.navigation.navigate('Scroll')}
                        buttonStyle={{
                            backgroundColor: '#4688AA',
                            borderRadius: 25,
                            borderWidth: 1,
                            borderColor: 'transparent'
                        }}
                    />
                    <View
                        style={{marginTop: 30}}>
                        <TextInput
                            style={styles.inputText}
                            placeholder = "Write text to send..."
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            onSubmitEditing={Keyboard.dismiss}                
                        />
                        <Button
                            title="Send text to next page"
                            onPress={() => {
                                this.props.navigation.navigate('Params', {
                                    sendedText: this.state.text                            
                                });
                                Keyboard.dismiss(); // Close keyboard on button press
                            }}
                            textStyle={{fontWeight: 'bold'}}
                            buttonStyle={{
                                borderRadius: 25,
                                borderWidth: 1,
                                borderColor: 'transparent',
                                backgroundColor: '#D5232C'
                            }}
                            containerViewStyle={{ marginTop: 15 }}
                        />
                        <Button
                            title="D-Genix Employees List"
                            onPress={() => {
                                this.props.navigation.navigate('List1')}}
                            textStyle={{fontWeight: 'bold'}}
                            buttonStyle={{
                                backgroundColor: '#2A97BB',
                                borderRadius: 25,
                                borderWidth: 1,
                                borderColor: 'transparent'
                            }}
                            containerViewStyle={{ marginTop: 25 }}
                        />
                        <Button
                            title="Header Options"
                            onPress={() => {
                                this.props.navigation.navigate('HeadOptions');
                            }}
                            textStyle={{fontWeight: 'bold'}}
                            buttonStyle={{
                                backgroundColor: '#B8E2C8',
                                borderRadius: 25,
                                borderWidth: 1,
                                borderColor: 'transparent'
                            }}
                            containerViewStyle={{ marginTop: 25 }}
                        />
                        <Button
                            title="What we do"
                            onPress={() => {
                                this.props.navigation.navigate('Tabs');
                            }}
                            textStyle={{fontWeight: 'bold'}}
                            buttonStyle={{
                                backgroundColor: '#6F49CE',
                                borderRadius: 25,
                                borderWidth: 1,
                                borderColor: 'transparent'
                            }}
                            containerViewStyle={{ marginTop: 25 }}
                        />
                        <Button
                            title="Technologies"
                            onPress={() => {
                                this.props.navigation.navigate('BottomTabs');
                            }}
                            textStyle={{fontWeight: 'bold'}}
                            buttonStyle={{
                                backgroundColor: '#1D1058',
                                borderRadius: 25,
                                borderWidth: 1,
                                borderColor: 'transparent'
                            }}
                            containerViewStyle={{ marginTop: 25 }}
                        />
                        <Button
                            title="Contact Us"
                            onPress={() => {
                                this.props.navigation.navigate('Drawer');
                            }}
                            textStyle={{fontWeight: 'bold'}}
                            buttonStyle={{
                                backgroundColor: '#01A58D',
                                borderRadius: 25,
                                borderWidth: 1,
                                borderColor: 'transparent'
                            }}
                            containerViewStyle={{ marginTop: 25, marginBottom: 25 }}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    titleStyle: {
        fontSize: 30,
        marginTop: 30,
        marginBottom: 40,
        color: '#DC143C',
    },
    inputText: {
        backgroundColor: '#FFFFFF',
        borderColor : '#000000',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 40,
        paddingLeft: 5
      },
});

  