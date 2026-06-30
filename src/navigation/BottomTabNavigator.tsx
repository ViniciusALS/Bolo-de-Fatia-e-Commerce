import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesButton from '../components/CategoriesButton';
import FavoriteButton from '../components/FavoriteButton';
import HomeButton from '../components/HomeButton';
import OrdersButton from '../components/OrdersButton';
import ProfileButton from '../components/ProfileButton';
import CategoriesScreen from '../screens/CategoryScreen';
import FavoritesScreen from '../screens/FavoriteScreen';
import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProductScreen from '../screens/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Colors } from '../theme';
import { BottomTabParamList } from './types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: Colors.branco,
                padding: 24,
            },
            tabBarLabelStyle: {
                fontSize: 10,
                color: Colors.preto,
                fontWeight: '500',
            },
            tabBarActiveTintColor: Colors.preto,
            tabBarInactiveTintColor: Colors.quasePreto
        }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ focused }) => <HomeButton isFocused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="CategoriesTab"
        component={CategoriesScreen}
        options={{
          tabBarLabel: 'Categorias',
          tabBarIcon: ({ focused }) => <CategoriesButton isFocused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="FavoritesTab"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ focused }) => <FavoriteButton isFocused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ focused }) => <OrdersButton isFocused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => <ProfileButton isFocused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="ProductDetail"
        component={ProductScreen}
        options={{
          tabBarItemStyle: { display: 'none' },
        }}
      />
    </BottomTab.Navigator>
  );
}
