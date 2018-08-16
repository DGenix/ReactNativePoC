import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class BackendTechTab extends React.Component {
    render() {
        // this are local images
        let netImage = require('./../../assets/img/net.png');
        let azureImage = require('./../../assets/img/azure.png');
        let sqlImage = require('./../../assets/img/sqlserver.png');
        let mysqlImage = require('./../../assets/img/mysql.png');
        return (            
            <View style={styles.content}>
                <View style={styles.row}>
                    <Image
                        source={netImage}
                        style={styles.image} />
                    <Image
                        source={azureImage}
                        style={styles.image} />
                </View>
                <View style={styles.row}>
                    <Image
                        source={sqlImage}
                        style={styles.image} />
                    <Image                        
                        source={mysqlImage}
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