import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class WebTechTab extends React.Component {
    render() {
        // this are local images
        let htmlImage = require('./../../assets/img/html.png');
        let cssImage = require('./../../assets/img/css3.png');
        let redisImage = require('./../../assets/img/redis.png');
        let aspImage = require('./../../assets/img/aspnet.png');
        return (
            <View style={styles.content}>
                <View style={styles.row}>                    
                    <Image
                        source={htmlImage}
                        style={styles.image} />
                    <Image
                        source={cssImage}
                        style={styles.image} />
                </View>
                <View style={styles.row}>
                    <Image
                        source={redisImage}
                        style={styles.image} />
                    <Image
                        source={aspImage}
                        style={styles.image} />
                </View>
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
        paddingLeft: 15,
        paddingRight: 15
    },
    row: {
        marginTop: 15,        
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        width: 150,
        height: 150,
        marginRight: 15,
        backgroundColor: 'white'
    }
});