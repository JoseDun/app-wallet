import React, { useContext, useState } from 'react';

const ProfileContext = React.createContext([{}, () => {}]);

export const useProfileContext = () => {
	return useContext(ProfileContext);
};

export function ProfileContextProvider({ children }) {
	const [user, setUser] = useState({});

	return <ProfileContext.Provider value={[user, setUser]}>{children}</ProfileContext.Provider>;
}
