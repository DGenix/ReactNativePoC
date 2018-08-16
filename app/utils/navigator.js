import React from 'react';
import { View, SafeAreaView, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    DrawerItems
    } from 'react-navigation';
import { Divider, Header } from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import ScrollScreen from '../screens/ScrollScreen';
import ReceiveParamsScreen from '../screens/ReceiveParamsScreen';
import ListScreen from '../screens/ListScreen';
import HeaderOptionsScreen from '../screens/HeaderOptionsScreen';
import EmployeeProfileScreen from '../screens/EmployeeProfileScreen';
import MobileAppsTab from '../screens/tabs/MobileAppsTab';
import WebTab from '../screens/tabs/WebTab';
import MobileTechTab from '../screens/tabs/MobileTechTab';
import WebTechTab from '../screens/tabs/WebTechTab';
import BackendTechTab from '../screens/tabs/BackendTechTab';
import CallUsScreen from '../screens/CallUsScreen';
import EmailUsScreen from '../screens/EmailUsScreen';

const TopTabs = createMaterialTopTabNavigator(
    {
        Mobile: MobileAppsTab,
        Web: WebTab
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: "#D7D8DB",
            labelStyle: {
                fontSize: 15,
                fontWeight: 'bold'
            },
            style: {
                backgroundColor: '#33BBE8'
            },
            indicatorStyle: {
                backgroundColor: 'white'
            }
        }
    }
);

const BottomTabs = createBottomTabNavigator(
    {
        Mobile: MobileTechTab,
        Web: WebTechTab,
        Backend: BackendTechTab
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName == 'Mobile') {
                    iconName = `ios-phone-portrait${focused ? '' : '-outline'}`;
                }
                else if (routeName == 'Web') {
                    iconName = `ios-globe${focused ? '' : '-outline'}`;
                }
                else if (routeName == 'Backend') {
                    iconName = `ios-code${focused ? '' : '-outline'}`;
                }

                return <Ionicons name={iconName} size={25} color={tintColor} />
            }
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#D7D8DB',
            labelStyle: {
                fontSize: 12,
                fontWeight: 'bold'
            },
            style: {
                backgroundColor: '#33BBE8'
            }
        }
    }
);

// Necessary for drawer hamburger
const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={{ backgroundColor: 'white' }}>
            <Image
                source={ require('./../assets/img/dgenix-header.png') }
                style={{ marginLeft: 1, width: 280, height: 100, backgroundColor: 'white', resizeMode: 'contain' }}
            />
            <Divider style={{ backgroundColor: 'black' }} />
        </View>
        <ScrollView>
            <DrawerItems { ...props } />
        </ScrollView>
    </SafeAreaView>
);

const DrawerSample = createDrawerNavigator(
    {
        CallUs: { screen: CallUsScreen },
        EmailUs: { screen: EmailUsScreen }
    },
    {
        initialRouteName: 'CallUs',
        contentComponent: CustomDrawerComponent,
        drawerWidth: 300
    }
);

DrawerSample.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: (
            <View>
                <Ionicons
                    name='ios-menu'
                    size={30}
                    color='white'
                    style={{marginLeft: 15}}
                    onPress={() => navigation.toggleDrawer()}
                />
            </View>
        ),
        headerStyle: {
            backgroundColor: '#2A97BB',
            color: 'white'
        },
        title: 'Contact',
    }
};

class TabsScreen extends React.Component {
    static navigationOptions = {
        title: 'What we do'
    };

    static router = TopTabs.router;
    render() {
        return (
            <TopTabs navigation={this.props.navigation} />
        );
    }
};

class BottomNavigation extends React.Component {
    static navigationOptions = {
        title: 'Technologies that we use'
    };
    static router = BottomTabs.router;
    render() {
        return (
            <BottomTabs navigation={this.props.navigation} />
        );
    }
};

export const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Scroll: ScrollScreen,
        Params: ReceiveParamsScreen,
        List1: ListScreen,
        HeadOptions: HeaderOptionsScreen,
        Employee: EmployeeProfileScreen,
        Tabs: TabsScreen,
        BottomTabs: BottomNavigation,
        Drawer: DrawerSample,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#2A97BB'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
);