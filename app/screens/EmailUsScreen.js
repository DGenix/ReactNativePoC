import React from 'react';
import { StyleSheet, Keyboard, ScrollView, View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import email from 'react-native-email';

export default class EmailUsScreen extends React.Component {
    static navigationOptions = {
        title: 'Email Us!',
        drawerLabel: 'Email Us',
        drawerIcon: ({ tintColor }) => (
            <FontAwesome name='envelope-o' size={24} color={tintColor} />
        )
    }
    state = { senderEmail: '', senderSubject: '', senderContent: '' };
    sendEmail = () => {
        var to = ['info@d-genix.com']
        email(to, {
            subject: (this.state.senderEmail + ": " + this.state.senderSubject),
            body: this.state.senderContent
        }).catch(console.error)
    }
    render() {
        return (
            <ScrollView style={styles.scrollContent}>
                <View style={styles.content}>
                    <Text style={styles.textStyle}>Enter your name or Company name:</Text>
                    <TextInput
                        style={styles.inputTextStyle}
                        placeholder="Enter your name or company name here..."
                        keyboardType="default"
                        textContentType="none"
                        returnKeyType="next"
                        onChangeText={(senderEmail) => this.setState({senderEmail})}
                        value={this.state.senderEmail}
                        blurOnSubmit={false}
                        onSubmitEditing={() => this.subjectRef.focus()}
                    />
                    <Text style={styles.textStyle}>Enter your email subject:</Text>
                    <TextInput
                        ref={subjectRef => this.subjectRef = subjectRef}
                        style={styles.inputTextStyle}
                        placeholder="Write your email subject here..."
                        keyboardType="default"
                        textContentType="none"
                        returnKeyType="next"
                        maxLength={65}
                        onChangeText={(senderSubject) => this.setState({senderSubject})}
                        value={this.state.senderSubject}
                        blurOnSubmit={false}
                        onSubmitEditing={() => this.contentRef.focus()}
                    />
                    <Text style={styles.textStyle}>Enter your email content:</Text>
                    <TextInput
                        ref={contentRef => this.contentRef = contentRef}
                        style={styles.multilineInputTextStyle}
                        placeholder="Write your email content here..."
                        onSubmitEditing={Keyboard.dismiss}
                        keyboardType="default"
                        textContentType="none"
                        returnKeyType="done"
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(senderContent) => this.setState({senderContent})}
                        value={this.state.senderContent}                    
                    />
                    <View style={{flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                        <Button
                            onPress={this.sendEmail}
                            title="Send Email"
                            textStyle={{fontWeight: 'bold'}}
                            buttonStyle={{
                                backgroundColor: '#0096BE',
                                marginTop: 15,
                                width: '100%'
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    scrollContent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    content: {        
        paddingLeft: 15,
        paddingTop: 5,
        paddingRight: 15,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    textStyle: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold'
    },
    inputTextStyle: {
        backgroundColor: '#FFF',
        borderColor: '#000',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 5,
        marginRight: 5,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        width: '100%'
    },
    multilineInputTextStyle: {
        backgroundColor: '#FFF',
        borderColor: '#000',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 5,
        marginRight: 5,
        height: 'auto',
        minHeight: 100,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        width: '100%'
    }
});