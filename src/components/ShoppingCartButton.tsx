import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { ShoppingCartSvg } from "../../assets/icons";
import { RootStackParamList } from "../navigation/types";


export default function ShoppingCartButton() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
            <ShoppingCartSvg/>
        </TouchableOpacity>
    );
}