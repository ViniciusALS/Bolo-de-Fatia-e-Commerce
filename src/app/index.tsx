import { SafeAreaProvider } from "react-native-safe-area-context";
import { CartProvider } from "../context/CartContext";
import { UserProvider } from "../context/UserContext";
import AppNavigator from "../navigation/AppNavigator";

export default function App() {
	return (
		<SafeAreaProvider>
			<UserProvider>
				<CartProvider>
					<AppNavigator/>
				</CartProvider>
			</UserProvider>
		</SafeAreaProvider>
	);
}

