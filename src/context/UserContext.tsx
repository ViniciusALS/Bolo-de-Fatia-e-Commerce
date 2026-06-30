import { createContext, useContext, useState, type ReactNode } from 'react';
import { Usuario } from '../types';

export interface UserContextType {
	usuario: Usuario | null;
	login: (user: Usuario) => void;
	logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
	const [usuario, setUsuario] = useState<Usuario | null>(null);

	function login(user: Usuario) {
		setUsuario(user);
	}

	function logout() {
		setUsuario(null);
	}

	return (
		<UserContext.Provider value={{ usuario: usuario, login, logout }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
}
