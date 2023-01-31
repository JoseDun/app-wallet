import React, { createContext, useContext } from 'react';

export const SignUpFormLoadingContext = createContext();

export const useSignUpFormLoadingContext = () => {
	return useContext(SignUpFormLoadingContext);
};

export function SignUpFormLoadingContextProvider({ isLoading, children }) {
	return (
		<SignUpFormLoadingContext.Provider value={isLoading}>
			{children}
		</SignUpFormLoadingContext.Provider>
	);
}
