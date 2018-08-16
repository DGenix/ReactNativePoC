import React from 'react';
import { StyleSheet, SectionList, Text, View, TouchableOpacity } from 'react-native';
import { Divider, Icon } from 'react-native-elements';

export default class ListScreen extends React.Component {
    static navigationOptions = {
        title: 'D-Genix Employees'
    };
    render() {
        return (
            <View style={styles.content}>
                <Text style={styles.titleText}>D-Genix Employees List</Text>                
                <SectionList
                    style={{marginBottom: 80}}
                    sections={EmployeesList}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Employee', {
                                    title: item.name,
                                    employeeName: item.name,
                                    employeePos: item.position,
                                    employeeImg: item.img
                                });
                            }}>
                            <View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10}}>
                                    <Text style={styles.item}>{item.name}</Text>
                                    <Icon
                                        name='chevron-right'
                                        size={25}
                                        color='black'
                                    />
                                </View>
                                <Divider style={{ backgroundColor: 'black' }} />
                            </View>
                        </TouchableOpacity>
                    }
                    renderSectionHeader={({section}) =>
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    }
                    keyExtractor={(item, index) => index}
                />                
            </View>
        );
    }
}

const EmployeesList = [
    {
        title: 'Web',
        data:[
            {
                key: 'Oso',
                name: 'Bruno Sabetta',
                position: 'Front End Developer',
                img: 'https://dgenix.com/assets/img/team/bruno-sabetta.png'
            },
            {
                key: 'Cesar',
                name: 'Cesar Araujo',
                position: 'Full Stack Web Developer',
                img: 'https://dgenix.com/assets/img/team/cesar-araujo.png'
            },
            {
                key: 'David',
                name: 'David Revoledo',
                position: 'CEO',
                img: 'https://dgenix.com/assets/img/team/david-revoledo.png'
            },
            {
                key: 'Emiliano',
                name: 'Emiliano Cortez',
                position: 'Full Stack Web Developer',
                img: 'https://dgenix.com/assets/img/team/emiliano-cortez.png'
            },
            {
                key: 'Gonzalo',
                name: 'Gonzalo Herrera',
                position: 'Full Stack Web Developer',
                img: 'https://dgenix.com/assets/img/team/gonzalo-herrera.png'
            },
            {
                key: 'Bigote',
                name: 'Lisandro Lucatti',
                position: 'Full Stack Web Developer',
                img: 'https://dgenix.com/assets/img/team/lisandro-lucatti.png'
            }
        ]
    },
    {
        title: 'Mobile',
        data: [
            {
                key: 'Fabri',
                name: 'Fabricio Bertani',
                position: 'Mobile developer',
                img: 'https://dgenix.com/assets/img/team/fabricio-bertani.png'
            },
            {
                key: 'Fede',
                name: 'Federico Maccaroni',
                position: 'Full Stack Mobile Developer',
                img: 'https://dgenix.com/assets/img/team/federico-maccaroni.png'
            },
            {
                key: 'Juan',
                name: 'Juan Manuel Gentili',
                position: 'Mobile developer',
                img: 'https://dgenix.com/assets/img/team/juan-gentili.png'
            },
            {
                key: 'Miño',
                name: 'Mariano Miño',
                position: 'Mobile Developer',
                img: 'https://dgenix.com/assets/img/team/mariano-mino.png'
            },
            {
                key: 'Nico',
                name: 'Nicolas Milcoff',
                position: 'COO',
                img: 'https://dgenix.com/assets/img/team/nicolas-milcoff.png'
            }
        ]
    },
    {
        title: 'Design',
        data: [
            {
                key: 'Mariana',
                name: 'Mariana Alemanno',
                position: 'UI/UX Designer',
                img: 'https://dgenix.com/assets/img/team/mariana-alemanno.png'
            }
        ]
    }
]

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white'
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 15
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 40,
    },
    sectionHeader: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'lightgrey',
    },
})