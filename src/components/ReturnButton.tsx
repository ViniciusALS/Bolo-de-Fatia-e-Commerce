import { ArrowLeftSvg } from "@/assets/icons";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

export default function ReturnButton() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ArrowLeftSvg/>
        </TouchableOpacity>
    );
}