import {
	Image,
	ImageSourcePropType,
	StyleProp,
	Text,
	TouchableOpacity,
	ViewStyle,
} from 'react-native'

type OutlinedButtonProps = {
	title: string
	borderColor: string
	borderRadius?: number
	borderWidth?: number
	onPress: () => void
	disabled?: boolean
	textStyle?: string
	buttonStyle?: StyleProp<ViewStyle>
	leadingIconSource?: ImageSourcePropType
}

export default function OutlinedButton({
	title,
	borderColor,
	borderRadius = 4,
	borderWidth = 2,
	onPress,
	disabled = false,
	textStyle,
	buttonStyle,
	leadingIconSource,
}: OutlinedButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			disabled={disabled}
			className={'flex-row items-center justify-center gap-2.5 px-[24px] py-[12px]'}
			style={[
				{ borderColor: borderColor, borderWidth: borderWidth, borderRadius: borderRadius },
				buttonStyle,
			]}
			onPress={onPress}
		>
			{leadingIconSource && <Image source={leadingIconSource} resizeMode={'contain'} />}
			<Text className={`font-regular text-[16px] text-white opacity-[0.44] ${textStyle}`}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}
