import { CategoriesFocusedSvg, CategoriesSvg } from "@/assets/icons";
import { View } from "react-native";

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