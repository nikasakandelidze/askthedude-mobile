import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "../page/homepage/index";
import { ProfilePage } from "../page/profile/index";
import { Notifications } from "../page/notifications/index";
import { size } from "../commons/style";
import { AddProject } from "../page/addProject";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export const MainNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarIcon: ({}) => (
                <Ionicons name="search-outline" size={size.icon.medium} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="MainProfile"
            component={ProfilePage}
            options={{
              tabBarIcon: ({}) => (
                <Ionicons name="person-outline" size={size.icon.medium} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="AddProject"
            component={AddProject}
            options={{
              tabBarIcon: ({}) => (
                <Ionicons name="add-circle-outline" size={size.icon.medium} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarIcon: ({}) => (
                <Ionicons
                  name="notifications-outline"
                  size={size.icon.medium}
                />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
