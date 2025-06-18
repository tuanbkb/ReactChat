import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";

export type StackScreenRoute = {
  name: string;
  component: React.ComponentType<any>;
  options?: any;
};

export const AuthStackNames = {
  Login: 'Login',
  SignUp: 'SignUp'
};

export const AuthStackRoutes: StackScreenRoute[] = [
  {
    name: AuthStackNames.Login,
    component: LoginScreen,
    options: {headerShown: false},
  },
  {
    name: AuthStackNames.SignUp,
    component: SignUpScreen,
    options: {headerShown: false},
  },
];

export const MainStackNames = {
  HomeTabs: 'HomeTabs',
  Profile: 'Profile'
}

export const MainStackRoutes: StackScreenRoute[] = [
]