import React from 'react';
import { StatusBar, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class ScrollScreen extends React.Component {
    static navigationOptions = {
      title: 'About Us'
    };
    render() {
      return (
        <ScrollView style={styles.content}>
          <View style={styles.viewBackground}>
            <Text style={styles.textH2}>
              DGenix is a highly specialized software development company that focuses on providing comprehensive, high quality solutions to our clients located around the world.
            </Text>
            <Text style={styles.textH3}>
              We cover all aspects of custom software and application development and management.
            </Text>
            <Text style={styles.textH4}>
              We also offer team augmentation solutions to companies of all sizes and consultancy on .NET / Xamarin / Web technologies.
            </Text>
            <Button
              title="Go Back"
              onPress={() => this.props.navigation.goBack()}
              textStyle={{fontWeight: 'bold'}}
              buttonStyle={{
                borderRadius: 25,
                borderWidth: 1,
                width: 175,
                borderColor: 'transparent',
                backgroundColor: '#567D8C',
                marginTop: 30
              }}
            />
          </View>
        </ScrollView>        
      );
    }
  }

  const styles = StyleSheet.create({
      content: {        
        backgroundColor: 'white',
      },
      textH2: {
        marginTop: 15,
        fontSize: 34
      },
      textH3: {
        marginTop: 10,
        fontSize: 28
      },
      textH4: {
        marginTop: 10,
        fontSize: 22
      },
      viewBackground: {
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
      }
  })