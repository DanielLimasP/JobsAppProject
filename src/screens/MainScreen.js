//import * as React from 'react';
//import { Text, View } from 'react-native';
import color from '../styles/colors'
import { mainStyles } from '../styles/styles'
import MyButton from '../components/MyButton'
import ReactMap from '../components/ReactMap'
import JobList from '../components/JobList';
import AddJob from '../components/AddJob'
import React, { useContext, useEffect } from 'react';
import { UsuarioContext } from '../context/UsuarioContext'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, BaseRouter } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Alert, BackHandler, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Text } from 'native-base';
import { useTheme, Avatar, Caption, Paragraph, TouchableRipple, Switch, Drawer, List } from 'react-native-paper';


function RecordScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
        <TouchableOpacity onPress={navigation.openDrawer} style={styles.fabButton}>
          <Ionicons name='md-menu' size={32} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fabButton}>
          <Ionicons name='ios-notifications' size={32} color='white'/>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Record</Text>
      </View>
    </View>
  );
}

function JobsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
        <TouchableOpacity onPress={navigation.openDrawer} style={styles.fabButton}>
          <Ionicons name='md-menu' size={32} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fabButton}>
          <Ionicons name='ios-notifications' size={32} color='white'/>
        </TouchableOpacity>
      </View>
      
      <View style={{ flex: 1 }}>
      
        <Text style={styles.jobTitle}>Agregar Trabajo</Text>
        <AddJob
        ></AddJob>
         <Text style={styles.jobTitleAlt}>Lista de Trabajos</Text>
        <JobList></JobList>
      </View>

    </View>
  );
}

const Tab = createBottomTabNavigator();
const Drawer2 = createDrawerNavigator();

export default function MainLogin(props) {
  useBackButton(SignOff)
  //const JobsScreenMenu = ({ navigation }) => <Screen navigation={ navigation } name="Jobs" />
  const [login, loginAction] = useContext(UsuarioContext)
  
  const TabsScreen = () => (
    <Tab.Navigator initialRouteName="Map"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Record') {
              iconName = 'md-bookmarks';
              color = focused ? color.PRIMARYCOLOR : '#51aadf';
            } else if (route.name === 'Map') {
              iconName = 'md-locate';//md-'somethig' for android logo style
              color = focused ? color.PRIMARYCOLOR : '#51aadf';
            } else {
              iconName = 'ios-briefcase';//ios-'somethig' for ios logo style
              color = focused ? color.PRIMARYCOLOR : '#51aadf';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={32} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: color.PRIMARYCOLOR,
          inactiveTintColor: color.SECONDARYCOLOR,
          showIcon: true
        }}
      >
        <Tab.Screen name="Record" component={RecordScreen}/>
        <Tab.Screen name="Map" component={MapScreen} defa/>
        <Tab.Screen name="Jobs" component={JobsScreen} />
      </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Drawer2.Navigator drawerContent={ (props) => <Menu { ...props }/>} >
        <Drawer2.Screen name="Jobs" component={TabsScreen}/>
        <Drawer2.Screen name="Notifications" component={TabsScreen}/>
        <Drawer2.Screen name="Settings" component={TabsScreen}/>
        <Drawer2.Screen name="Log Out" component={SignOff}/>
      </Drawer2.Navigator>
    </NavigationContainer>
  );

  function Menu(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../assets/images/logo.png')}
                            />
                            <View style={{marginLeft:15, alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                              <View style={styles.section}>
                                <Caption style={styles.caption}>Empleador Nivel   </Caption>
                                <Paragraph style={[styles.paragraph, styles.caption]}>1</Paragraph>
                              </View>
                              <View style={styles.section}>
                                <Caption style={styles.caption}>Trabajador Nivel   </Caption>
                                <Paragraph style={[styles.paragraph, styles.caption]}>1</Paragraph>
                              </View>
                            </View>
                        </View>
                        <View>
                          <Title style={styles.title}>User</Title>
                          <Caption style={styles.caption}>{login.usuario.email}</Caption>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Ionicons name='md-home' size={size} color={color}/>
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Map')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Ionicons name='md-person' size={size} color={color}/>
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Map')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Ionicons name='ios-notifications' size={size} color={color}/>
                            )}
                            label="Notifications"
                            onPress={() => {props.navigation.navigate('Map')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Ionicons name='md-settings' size={size} color={color}/>
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Map')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Ionicons name='md-hand' size={size} color={color}/>
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('Map')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={false}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                      <Ionicons name='ios-undo' size={size} color={color}/>
                    )}
                    label="Sign Out"
                    onPress={() => {SignOff()}}
                />
            </Drawer.Section>
        </View>
    );
    /*
    return(
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{
              width: 100,
              height: 100,
              marginTop: 90,
              marginLeft: 5,
            }} source={require('../assets/images/logo.png')}
          />
          <Text>
            Empleador nivel: 1{'\n'}
            Trabajador nivel: 1{'\n'}
          </Text>
          <Text>
            {login.usuario.email + '\n'}
          </Text>
          <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
            <TouchableOpacity style={styles.fabButton}>
              <Ionicons name='ios-briefcase' size={32} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fabButton}>
              <Ionicons name='ios-notifications' size={32} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fabButton}>
              <Ionicons name='md-settings' size={32} color='white'/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={styles.btnLogOut} onPress={() => SignOff()}>
            <Text style={{ color: 'white' }}>Cerrar Sesión</Text>
            <Ionicons name='ios-undo' size={32} color='white'/>
          </TouchableOpacity>
        </View>
      </View>
    )
    */
  }

  function MapScreen({ navigation }) {
    return (
      <View style={{ flex: 1 }}>
        <ReactMap/>
        <View style={{ justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
          <TouchableOpacity onPress={navigation.openDrawer} style={styles.fabButton}>
            <Ionicons name='md-menu' size={32} color='white'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fabButton}>
            <Ionicons name='ios-notifications' size={32} color='white'/>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        </View>
      </View>
    );

    
  }

  function SignOff(){
    Alert.alert(
      "Salir",
      "¿Seguro que desea cerrar sesión?",
      [
        {
          text: 'Si', onPress:()=>{
            loginAction({
              type: 'sign-out',
              data: {}
            })
            goToScreen('Splash')
          }
        },
        {
          text : 'No', onPress:()=>{}, style:'cancel'
        }
      ]
    )
  }

  function goToScreen(routeName) {
    props.navigation.navigate(routeName)
  }
}
  

function useBackButton(handler) {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handler)

    return () => {
      console.log('hardwareBackPress Close')
      BackHandler.removeEventListener("hardwareBackPress", handler)
    }
  }, [handler])
}

const styles = StyleSheet.create({
  txtVw: {
    textAlign: 'center',
    marginTop: 200,
    fontFamily: 'roboto-regular',
  },
  bottomContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  fabButton: {
    alignItems:'center',
    justifyContent:'center',
    width:42,
    height:42,
    marginTop: 30,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: color.SECONDARYCOLOR,
    borderRadius:50,
  },
  btnLogOut: {
    margin: 5,
    width: 150,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: color.SECONDARYCOLOR,
    borderRadius:50,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  jobTitle: {
    marginBottom: 5,
    marginLeft: 15,
    marginTop: 10
  },
  jobTitleAlt: {
    marginBottom: 5,
    marginLeft: 15,
    marginTop: 10
  }
})

