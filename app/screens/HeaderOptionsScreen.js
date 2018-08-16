import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class HeaderOptionsScreen extends React.Component {
    static navigationOptions = {
        title: 'Header Options',        
        headerRight: (
            <Icon
                onPress={() => alert('You touch a header button!')}
                name='search'
                type='font-awesome'
                color='white'
                title='Search'
            />
        )
    };
    render() {
        return (
            <View style={styles.content}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white'
    }
});