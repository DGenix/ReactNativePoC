import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class WebTab extends React.Component {
    render() {
        return (
            <View style={styles.content}>
                <Icon
                    name='web'
                    type='material-community'
                    color='black'
                    size={80}
                />
                <Text style={styles.textStyle}>Good looking, responsive, engaging solutions. We use the latest technologies available to create awesome experiences.</Text>
            </View>
        )
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
})