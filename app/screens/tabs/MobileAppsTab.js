import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';


export default class MobileAppsTab extends React.Component {
    render() {
        return (
            <View style={styles.content}>
                <Icon
                    name="mobile-phone"
                    type="font-awesome"
                    color='black'
                    size={80}
                />
                <Text style={styles.textStyle}>We develop mobile applications that take advantage of all the capabilities offered by each type of device. We stand out for our commitment to the usability and experience of use.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 15
    },
    textStyle: {
        fontSize: 16,
        marginTop: 15        
    }
});