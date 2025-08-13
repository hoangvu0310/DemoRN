import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'

type FillButtonProps = {
	title: string
	backgroundColor: string
	borderRadius?: number
	onPress: () => void
	buttonStyle?: StyleProp<ViewStyle>
}

export default function FillButton({
	title,
	backgroundColor,
	borderRadius = 4,
	onPress,
	buttonStyle,
}: FillButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			className={'flex justify-center items-center px-[24px] py-[12px]'}
			style={[{ backgroundColor: backgroundColor, borderRadius: borderRadius }, buttonStyle]}
			onPress={onPress}
		>
			<Text className={'font-regular text-[16px] text-white'}>{title}</Text>
		</TouchableOpacity>
	)
}
