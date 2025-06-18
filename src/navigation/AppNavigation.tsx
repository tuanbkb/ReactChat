import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackRoutes, MainStackRoutes } from "./routes";
import { useAppTheme } from "../theme/theme.provider";
import { NavigationContainer } from "@react-navigation/native";

const AppStack = createNativeStackNavigator();

function AuthStack() {
  return (
    <AppStack.Navigator>
      {AuthStackRoutes.map(route => (
        <AppStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </AppStack.Navigator>
  );
}

function MainStack() {
  return (
    <AppStack.Navigator>
      {MainStackRoutes.map(route => (
        <AppStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </AppStack.Navigator>
  );
}

export default function AppNavigator() {
  const {theme} = useAppTheme();
  const isLoggedIn = false; //Change this later

  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={isLoggedIn ? "Main" : "Auth"}
        screenOptions={{
          headerShown: false,
          navigationBarColor: theme.colors.background,
          contentStyle: { 
            backgroundColor: theme.colors.background
          }
        }}
      >
        {isLoggedIn ? (
          <AppStack.Screen
            name="Main"
            component={MainStack}
          />
        ) : (
          <AppStack.Screen
            name="Auth"
            component={AuthStack}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}