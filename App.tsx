import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IioIcon from 'react-native-vector-icons/Ionicons';
import AnalistScreen from './Screens/AnalistScreen';
import ProfilScreen from './Screens/ProfilScreen';
import AnaSayfaScreen from './Screens/AnaSayfaScreen';
import MaclarScreen from './Screens/MaclarScreen';
import LiglerScreen from './Screens/LiglerScreen';

const App = () => {
    const Tap = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tap.Navigator
                initialRouteName={'Analist'}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'AnaSayfa') {
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                        } else if (route.name === 'Maclar') {
                            iconName = focused ? 'ios-football' : 'ios-football-outline';
                        } else if (route.name === 'Ligler') {
                            iconName = focused ? 'ios-list' : 'list-outline';
                        } else if (route.name === 'Analist') {
                            iconName = focused ? 'stats-chart' : 'stats-chart';
                        } else if (route.name === 'Profil') {
                            iconName = focused ? 'ios-person' : 'ios-person-outline';
                        }
                        return <IioIcon  name={iconName} size={25} color={focused?'#fff':'#000'} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#fff',
                    inactiveTintColor: '#000',
                    activeBackgroundColor: '#0e9d00',
                    inactiveBackgroundColor: '#e6f5e4',
                    //showLabel: false,
                   
                }}>
                <Tap.Screen name="Maclar" component={MaclarScreen} options={{ header: () => null }} />
                <Tap.Screen name="Analist" component={AnalistScreen} options={{ header: () => null }} />
                <Tap.Screen name="AnaSayfa" component={AnaSayfaScreen} options={{ header: () => null }} />
                <Tap.Screen name="Ligler" component={LiglerScreen} options={{ header: () => null }} />
                <Tap.Screen name="Profil" component={ProfilScreen} options={{ header: () => null }} />
            </Tap.Navigator>
        </NavigationContainer>
    );
};
const styles = StyleSheet.create({

});
export default App;
