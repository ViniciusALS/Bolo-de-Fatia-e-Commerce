import { View } from "react-native";
import { OrdersFocusedSvg, OrdersSvg } from "../../assets/icons";

// ─── Primary Button ────────────────────────────────────────────────────────────
interface props {
    isFocused: boolean;
}

export default function OrdersButton({ isFocused }: props) {
    if (isFocused) {
        return (
            <View>
                <OrdersFocusedSvg/>
            </View>
        );
    }
    return (
        <View>
            <OrdersSvg/>
        </View>
    );
}