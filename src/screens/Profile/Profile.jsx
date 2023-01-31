import React, { useMemo } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { capitalize } from '../../helpers/string';
import { Storage } from '../../helpers/storage';

import { useProfileContext } from '../../context/ProfileContext';

import Avatar from '../../components/common/Avatar';
import AppIcon from '../../components/common/AppIcon';
import BackButton from '../../components/common/Buttons/BackButton';

import { ACCOUNT_COLORS, COLORS, SERVICES_COLORS } from '../../constants/theme/colors';
import { ICON_SIZES } from '../../constants/sizes';
import { SCREENS } from '../../constants/screens';
import { TOKEN_STORAGE_KEY, USER_NUMBER_STORAGE_KEY } from '../../constants/storage-keys';

import ShadowStyles from '../../styles/ShadowStyles';

export default function Profile() {
	const [profile] = useProfileContext();
	const navigation = useNavigation();

	const { name, lastname, urlImage } = profile || {};

	const displayName = useMemo(() => capitalize(`${name} ${lastname}`), [name, lastname]);

	const handlePressInfo = () => {
		navigation.navigate(SCREENS.ACCOUNT_DETAILS);
	};

	const handleLogout = () => {
		Storage.delete(TOKEN_STORAGE_KEY);
		Storage.delete(USER_NUMBER_STORAGE_KEY);
		navigation.navigate(SCREENS.WELCOME.name);
	};

	return (
		<View>
			<View>
				<View className="h-[29%] bg-primary justify-center items-center rounded-b-2xl ">
					<View className="z-50 justify-center items-center pb-8">
						<Avatar src={urlImage} alt={name} showCloud />
						<Text className="text-light">{displayName}</Text>
					</View>

					<View className="top-0 left-0 absolute">
						<Image
							source={require('../../assets/images/BigOval.png')}
							className="self-end"
						/>
					</View>
					<View className="-right-0 -bottom-2 absolute">
						<Image
							source={require('../../assets/images/Oval.png')}
							className="self-end"
						/>
					</View>
					<View className="absolute right-[350px] top-10">
						<BackButton defaultRoute={SCREENS.HOME.name} />
					</View>
				</View>

				<View className="h-[71%] relative bg-light">
					<View
						style={ShadowStyles.ShadowLarge}
						className="h-28 w-[93%] mx-4 bg-lightSecondary rounded-3xl absolute -top-16 flex-row justify-around"
					>
						<View className="justify-center px-2">
							<Text className="text-center text-primaryDark">6</Text>
							<Text className="text-center text-medium">Depósitos</Text>
						</View>
						<Text className="self-center text-light font-bold text-2xl"> | </Text>
						<View className="justify-center px-2">
							<Text className="text-center text-primaryDark">5</Text>
							<Text className="text-center text-medium">Retiros</Text>
						</View>
						<Text className="self-center text-light font-bold text-2xl"> | </Text>
						<View className="justify-center pr-2">
							<Text className="text-center text-primaryDark">248</Text>
							<Text className="text-center text-medium">Transacciones</Text>
						</View>
					</View>

					<Pressable
						style={ShadowStyles.Shadow}
						className="h-16 w-11/12 rounded-2xl mt-16 mx-4 pl-[14px] flex-row justify-around items-center bg-lightSecondary"
						onPress={handlePressInfo}
					>
						<View
							className="pt-3 px-[17px] h-12 rounded-[10px]"
							style={{ backgroundColor: SERVICES_COLORS.iconRecharge }}
						>
							<AppIcon
								library="FontAwesome"
								name="user"
								size={ICON_SIZES.MEDIUM}
								color={COLORS.light}
							/>
						</View>
						<View className="flex-row h-16 items-center w-[79%] justify-between">
							<View>
								<Text
									style={{
										color: COLORS.dark,
										paddingLeft: 5,
									}}
									className="text-sm font-normal"
								>
									Información de la cuenta
								</Text>
							</View>
							<AppIcon
								library="MaterialIcons"
								name="keyboard-arrow-right"
								size={ICON_SIZES.MEDIUM}
								color={COLORS.medium}
							/>
						</View>
					</Pressable>

					<View
						style={ShadowStyles.Shadow}
						className="h-48 rounded-2xl mt-5 mx-4 bg-lightSecondary"
					>
						<Pressable className="flex-row items-center justify-around h-16 w-[100%] pl-5">
							<View
								className="pt-3 px-[15px] h-12 rounded-[10px]"
								style={{ backgroundColor: ACCOUNT_COLORS.iconConf }}
							>
								<AppIcon
									library="FontAwesome"
									name="gear"
									size={ICON_SIZES.MEDIUM}
									color={COLORS.light}
								/>
							</View>
							<View
								className="flex-row h-16 items-center w-[85%] justify-between"
								style={{ borderBottomColor: COLORS.light, borderBottomWidth: 1 }}
							>
								<View className="pl-3">
									<Text
										style={{
											color: COLORS.dark,
											paddingLeft: 5,
										}}
										className="text-sm font-normal"
									>
										Configuraciones
									</Text>
								</View>

								<AppIcon
									library="MaterialIcons"
									name="keyboard-arrow-right"
									size={ICON_SIZES.MEDIUM}
									color={COLORS.medium}
								/>
							</View>
						</Pressable>

						<Pressable className="flex-row items-center justify-around h-16 w-[100%] pl-5">
							<View
								className="pt-3 px-[14px] h-12 rounded-[10px]"
								style={{ backgroundColor: ACCOUNT_COLORS.iconContact }}
							>
								<AppIcon
									library="AntDesign"
									name="message1"
									size={ICON_SIZES.MEDIUM}
									color={COLORS.light}
								/>
							</View>
							<View
								className="flex-row h-16 items-center w-[85%] justify-between"
								style={{ borderBottomColor: COLORS.light, borderBottomWidth: 1 }}
							>
								<View className="pl-3">
									<Text
										style={{
											color: COLORS.dark,
											paddingLeft: 5,
										}}
										className="text-sm font-normal"
									>
										Contáctanos
									</Text>
								</View>

								<AppIcon
									library="MaterialIcons"
									name="keyboard-arrow-right"
									size={ICON_SIZES.MEDIUM}
									color={COLORS.medium}
								/>
							</View>
						</Pressable>
						<Pressable className="flex-row items-center justify-around h-16 w-[100%] pl-5">
							<View
								className="pt-3 px-[21px] h-12 rounded-[10px]"
								style={{ backgroundColor: ACCOUNT_COLORS.iconAbout }}
							>
								<AppIcon
									library="FontAwesome"
									name="info"
									size={ICON_SIZES.MEDIUM}
									color={COLORS.light}
								/>
							</View>
							<View
								className="flex-row h-16 items-center w-[85%] justify-between"
								style={{ borderBottomColor: COLORS.light, borderBottomWidth: 1 }}
							>
								<View className="pl-3">
									<Text
										style={{
											color: COLORS.dark,
											paddingLeft: 5,
										}}
										className="text-sm font-normal"
									>
										Acerca de nosotros
									</Text>
								</View>

								<AppIcon
									library="MaterialIcons"
									name="keyboard-arrow-right"
									size={ICON_SIZES.MEDIUM}
									color={COLORS.medium}
								/>
							</View>
						</Pressable>
					</View>
					<Pressable
						style={ShadowStyles.Shadow}
						className="h-16 w-11/12 rounded-2xl mt-16 mx-4 pl-[14px] flex-row justify-around items-center bg-lightSecondary"
						onPress={handleLogout}
					>
						<View
							className="pt-3 px-[14px] h-12 rounded-[10px]"
							style={{ backgroundColor: SERVICES_COLORS.iconRecharge }}
						>
							<AppIcon
								library="AntDesign"
								name="logout"
								size={ICON_SIZES.MEDIUM}
								color={COLORS.light}
							/>
						</View>
						<View className="flex-row h-16 items-center w-[79%] justify-between">
							<View>
								<Text
									style={{
										color: COLORS.dark,
										paddingLeft: 5,
									}}
									className="text-sm font-normal"
								>
									Cerrar Sesión
								</Text>
							</View>
							<AppIcon
								library="MaterialIcons"
								name="keyboard-arrow-right"
								size={ICON_SIZES.MEDIUM}
								color={COLORS.medium}
							/>
						</View>
					</Pressable>
				</View>
			</View>
		</View>
	);
}
