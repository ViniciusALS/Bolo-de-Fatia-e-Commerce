import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import PasswordScreen from '../screens/PasswordScreen';
import RegisterScreen from '../screens/RegisterScreen';
import NewAccountScreen from '../screens/SucessfulNewAccountScreen';
// import ProductDetailScreen from '../screens/ProductDetailScreen';
// import { ProductsScreen } from '../screens/CategoriesScreen';
// import CheckoutScreen from '../screens/CheckoutScreen';
// import OrdersScreen from '../screens/OrdersScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      >
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />

        <Stack.Screen name="Success" component={NewAccountScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        {/* <Stack.Screen name="Products" component={ProductsScreen} /> */}
        {/* ProductDetail is registered inside BottomTabNavigator so the tab bar stays visible */}
        {/* <Stack.Screen name="Checkout" component={CheckoutScreen} /> */}
        {/* <Stack.Screen name="Orders" component={OrdersScreen} /> */}
        {/* <Stack.Screen name="Categories" component={BottomTabNavigator} /> */}
        {/* <Stack.Screen name="Profile" component={BottomTabNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
