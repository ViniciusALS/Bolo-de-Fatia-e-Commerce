import { createContext, useContext, useState, type ReactNode } from 'react';
import { Product } from '../types';

interface CartContextType {
	selectedProducts: Product[] | null;
	selectProduct: (product: Product) => void;
	removeProduct: (product: Product) => void;
	clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
	const [selectedProducts, setSelectedProducts] = useState<Product[] | null>(null);

	function selectProduct(product: Product) {
		setSelectedProducts(prev => [...(prev ?? []), product]);
	}

	function removeProduct(product: Product) {
		setSelectedProducts(prev => prev?.filter(p => p.id !== product.id) ?? null);
	}

	function clearCart() {
		setSelectedProducts(null);
	}

	return (
		<CartContext.Provider value={{ selectedProducts, selectProduct, removeProduct, clearCart }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
}
