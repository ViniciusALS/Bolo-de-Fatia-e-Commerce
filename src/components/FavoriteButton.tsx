import { View } from "react-native";
import { FavoritesFocusedSvg, FavoritesSvg } from "../../assets/icons";

// ─── Primary Button ────────────────────────────────────────────────────────────
interface props {
    isFocused: boolean;
}

export default function FavoriteButton({ isFocused }: props) {
    if (isFocused) {
        return (
            <View>
                <FavoritesFocusedSvg/>
            </View>
        );
    }
    return (
        <View>
            <FavoritesSvg/>
        </View>
    );
}