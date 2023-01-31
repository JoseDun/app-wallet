import {
	Welcome,
	Home,
	SignIn,
	SignUp,
	Services,
	ServiceRecharges,
	ServicePackages,
	Profile,
	AccountDetails,
} from '../screens';

export const SCREENS = {
	WELCOME: {
		name: 'Welcome',
		component: Welcome,
	},
	LOGIN: {
		name: 'SignIn',
		component: SignIn,
	},
	REGISTER: {
		name: 'SignUp',
		component: SignUp,
	},
	HOME: {
		name: 'Home',
		component: Home,
	},
	SERVICES: {
		name: 'Services',
		component: Services,
	},
	RECHARGE: {
		name: 'Recharge',
		component: ServiceRecharges,
	},
	PACKAGE: {
		name: 'Package',
		component: ServicePackages,
	},
	PROFILE: {
		name: 'Profile',
		component: Profile,
	},
	ACCOUNT_DETAILS: {
		name: 'AccountDetails',
		component: AccountDetails,
	},
};
