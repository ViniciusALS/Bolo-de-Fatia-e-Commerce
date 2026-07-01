import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { ShoppingCartSvg } from "../../assets/icons";
import { BottomTabParamList } from "../navigation/types";


export default function ShoppingCartButton({fill="none"}:{fill?:string}) {

    const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamList>>();

    return (
        <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
            <ShoppingCartSvg fill={fill}/>
        </TouchableOpacity>
    );
}