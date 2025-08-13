import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'

type OutlinedButtonProps = {
	title: string
	borderColor: string
	borderRadius?: number
	borderWidth?: number
	onPress: () => void
	textStyle?: string
	buttonStyle?: StyleProp<ViewStyle>
}

export default function OutlinedButton({
	title,
	borderColor,
	borderRadius = 4,
	borderWidth = 2,
	onPress,
	textStyle,
	buttonStyle,
}: OutlinedButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			className={'flex justify-center items-center px-[24px] py-[12px]'}
			style={[
				{ borderColor: borderColor, borderWidth: borderWidth, borderRadius: borderRadius },
				buttonStyle,
			]}
			onPress={onPress}
		>
			<Text className={`font-regular text-[16px] text-white opacity-[0.44] ${textStyle}`}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}
