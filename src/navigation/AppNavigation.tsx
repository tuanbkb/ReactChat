import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackRoutes, MainStackRoutes } from "./routes";
import { useAppTheme } from "../theme/theme.provider";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackParamList } from "./paramLists";

const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const MainStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      {AuthStackRoutes.map(route => (
        <AuthStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </AuthStack.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      {MainStackRoutes.map(route => (
        <MainStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </MainStack.Navigator>
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
            component={MainStackNavigator}
          />
        ) : (
          <AppStack.Screen
            name="Auth"
            component={AuthStackNavigator}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}