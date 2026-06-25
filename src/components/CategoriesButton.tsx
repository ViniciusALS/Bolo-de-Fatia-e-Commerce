import { View } from "react-native";
import { CategoriesFocusedSvg, CategoriesSvg } from "../../assets/icons";

// ─── Primary Button ────────────────────────────────────────────────────────────
interface props {
    isFocused: boolean;
}

export default function CategoriesButton({ isFocused }: props) {
    if (isFocused) {
        return (
            <View>
                <CategoriesFocusedSvg/>
            </View>
        );
    }
    return (
        <View>
            <CategoriesSvg/>
        </View>
    );
}