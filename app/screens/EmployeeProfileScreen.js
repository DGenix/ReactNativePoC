import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

export default class EmployeeProfileScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Default title'),            
        };
    };
    render() {
        const { navigation } = this.props;
        const employeeName = navigation.getParam('employeeName', 'Empty');
        const employeePos = navigation.getParam('employeePos', 'Empty');
        const employeeImg = navigation.getParam('employeeImg', 'Empty');
        return(
            <View style={styles.content}>
                <FastImage
                    style={styles.image}
                    source={{
                        uri: employeeImg,
                        priority: FastImage.priority.normal
                    }}
                />
                <View style={styles.textRow}>
                    <Text style={styles.textTitle}>Name:</Text>
                    <Text style={styles.textDescription}>{employeeName}</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={styles.textTitle}>Position:</Text>
                    <Text style={styles.textDescription}>{employeePos}</Text>
                </View>
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
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    image: {
        marginTop: 30,
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRow: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    textTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    textDescription: {
        fontSize: 16,
        marginLeft: 10 
    }
})