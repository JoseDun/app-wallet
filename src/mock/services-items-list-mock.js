import { ICON_SIZES } from '../constants/sizes';
import { COLORS, SERVICES_COLORS } from '../constants/theme/colors';

export const items = [
	{
		shadow: true,
		title: 'APUESTAS',
		subtitle: 'Sigue tus apuestas en Wplay, Rushbet...',
		icon: 'poker-chip',
		iconColor: SERVICES_COLORS.iconGame,
		iconSize: ICON_SIZES.EXTRA_LARGE,
		color: SERVICES_COLORS.games,
		libraryName: 'MaterialCommunity',
	},
	{
		shadow: true,
		title: 'PINES',
		subtitle: 'Recarga tu plataforma preferida y emp...',
		icon: 'game-controller',
		iconColor: SERVICES_COLORS.iconPins,
		iconSize: ICON_SIZES.EXTRA_LARGE,
		color: SERVICES_COLORS.pins,
		libraryName: 'Ionic',
	},
	{
		shadow: true,
		title: 'PAQUETES',
		subtitle: 'Compra el paquete preferido para tu op...',
		icon: 'phone-in-talk',
		iconColor: COLORS.primary,
		iconSize: ICON_SIZES.EXTRA_LARGE,
		color: SERVICES_COLORS.package,
		libraryName: 'MaterialCommunity',
		routerLink: 'Package',
	},
	{
		shadow: true,
		title: 'RECARGA',
		subtitle: 'Recarga saldo a tu operador personaliz...',
		icon: 'credit-card-plus',
		iconColor: SERVICES_COLORS.iconRecharge,
		iconSize: ICON_SIZES.EXTRA_LARGE,
		color: SERVICES_COLORS.recharge,
		libraryName: 'MaterialCommunity',
		routerLink: 'Recharge',
	},
];

export const services = [
	{
		value: 1,
		src: require('../assets/images/movistar.png'),
		title: 'Movistar',
	},
	{
		value: 2,
		src: require('../assets/images/claro.png'),
		title: 'Claro',
	},
	{
		value: 3,
		src: require('../assets/images/tigo.png'),
		title: 'Tigo',
	},
	{
		value: 4,
		src: require('../assets/images/virgin.png'),
		title: 'Virgin Mobile',
	},
	{
		value: 5,
		src: require('../assets/images/won.png'),
		title: 'Wom',
	},
];
