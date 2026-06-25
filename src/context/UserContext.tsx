import { createContext, useContext, useState, type ReactNode } from 'react';
import { User } from '../types';

export interface UserContextType {
	user: User | null;
	login: (user: User) => void;
	logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);

	function login(user: User) {
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
