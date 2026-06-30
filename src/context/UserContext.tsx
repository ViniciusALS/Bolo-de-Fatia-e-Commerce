import { createContext, useContext, useState, type ReactNode } from 'react';
import { Usuario } from '../types';

export interface UserContextType {
	user: Usuario | null;
	login: (user: Usuario) => void;
	logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<Usuario | null>(null);

	function login(user: Usuario) {
		setUser(user);
	}

	function logout() {
		setUser(null);
	}

	return (
		<UserContext.Provider value={{ user, login, logout }}>
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
