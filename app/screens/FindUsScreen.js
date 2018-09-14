import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';

export default class FindUsScreen extends React.Component {
    static navigationOptions = {
        title: 'Find Us!',
        drawerLabel: 'Find Us',
        drawerIcon: ({ tintColor }) => (
            <FontAwesome name='map-marker' size={24} color={tintColor} />
        ),
    };
    render() {
        return (
            <View style={styles.content}>
                <MapView
                    style={styles.map}
                    provider={undefined}
                    initialRegion={{
                        latitude: -32.945813,
                        longitude: -60.641726,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121
                    }}
                    showsScale={true}
                    rotateEnabled={true}
                    cacheEnabled={true}
                    loadingEnabled={true}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    minZoomLevel={17} >
                    <Marker
                        coordinate={{
                            latitude: -32.945813,
                            longitude: -60.641726
                        }}
                        title="D-Genix"
                        description="Córdoba 1365, 7 1"
                    />
                </MapView>
                <View style={styles.row}>
                    <FontAwesome name="map-marker" size={35} color="red" />
                    <Text style={styles.textStyle}>
                        Córdoba 1365, 7th Floor, Office 1
                    </Text>
                </View>
                <Text style={{...styles.textStyle, marginLeft: 50}}>
                    Rosario, Santa Fe
                </Text>
                <Text style={{...styles.textStyle, marginLeft: 50}}>
                    Argentina
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    map: {
        width: '100%',
        height: '70%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 15,
        marginTop: 10
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
        marginLeft: 10,
        fontWeight: 'bold'
    }    
})