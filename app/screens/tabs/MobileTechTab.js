import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class MobileTechTab extends React.Component {
    render() {
        let droidImg = require('../../assets/img/android.png');
        let iosImg = require('../../assets/img/ios.png');
        let xamImg = require('../../assets/img/xamarin.png');
        let crossImg = require('../../assets/img/cross.png');
        let csharpImg = require('../../assets/img/c.png');
        let sqliteImg = require('../../assets/img/sqllite.png');
        return (
            <View style={styles.content}>
                <View style={styles.row}>
                    <Image
                        source={droidImg}
                        style={styles.image} />
                    <Image
                        source={iosImg}
                        style={styles.image} />
                </View>
                <View style={styles.row}>
                    <Image
                        source={xamImg}
                        style={styles.image} />
                    <Image
                        source={crossImg}
                        style={styles.image} />
                </View>
                <View style={styles.row}>
                    <Image
                        source={csharpImg}
                        style={styles.image} />
                    <Image
                        source={sqliteImg}
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 80,
        marginRight: 15,
        backgroundColor: 'white'
    }
});