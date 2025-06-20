import BeginScreen from "../screens/auth/BeginScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import { AuthStackParamList } from "./paramLists";

export type StackScreenRoute = {
  name: keyof AuthStackParamList;
  component: React.ComponentType<any>;
  options?: any;
};

export const AuthStackNames: Record<keyof AuthStackParamList, keyof AuthStackParamList> = {
  Begin: 'Begin',
  Login: 'Login',
  Register: 'Register',
  ForgotPassword: 'ForgotPassword'
};

export const AuthStackRoutes: StackScreenRoute[] = [
  {
    name: AuthStackNames.Begin,
    component: BeginScreen,
    options: {headerShown: false},
  },
  {
    name: AuthStackNames.Login,
    component: LoginScreen,
    options: {headerTitleAlign: 'center', title: 'Login to ReactChat'},
  },
  {
    name: AuthStackNames.Register,
    component: RegisterScreen,
    options: {headerTitleAlign: 'center', title: 'Register a new account'},
  },
  {
    name: AuthStackNames.ForgotPassword,
    component: ForgotPasswordScreen,
    options: {headerTitleAlign: 'center', title: 'Reset your password'},
  },
];

export const MainStackNames = {
  HomeTabs: 'HomeTabs',
  Profile: 'Profile'
}

export const MainStackRoutes: StackScreenRoute[] = [
]