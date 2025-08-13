import { Image, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import Spacer from '@src/components/Spacer'
import { useState } from 'react'
import { COLORS, ICONS } from '@src/constants'
import useIsAndroid from '@src/hook/useIsAndroid'

type CommonTextFormFieldProps = TextInputProps & {
	title: string
	placeholder?: string
	isPassword?: boolean
	titleStyle?: string
	onChangeText: (value: string) => void
	value: string
}

export default function CommonTextFormField({
	title,
	placeholder,
	isPassword = false,
	titleStyle,
	onChangeText,
	value,
	...props
}: CommonTextFormFieldProps) {
	const [isActive, setIsActive] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const isAndroid = useIsAndroid()

	return (
		<View className={'flex flex-col'}>
			<Text className={`font-regular text-[16px] text-white opacity-[0.87] ${titleStyle}`}>
				{title}
			</Text>
			<Spacer height={8} />
			<View
				className={`flex-row items-center justify-start rounded-[4px] border-[0.8px] bg-grey4 ${isAndroid ? 'px-[12px] py-[6px]' : 'p-[12px]'} ${isActive ? 'border-white' : 'border-grey2'}`}
			>
				<TextInput
					{...props}
					cursorColor={COLORS.white}
					placeholder={placeholder}
					placeholderTextColor={COLORS.grey3}
					onChangeText={onChangeText}
					value={value}
					secureTextEntry={isPassword ? !showPassword : false}
					onFocus={() => setIsActive(true)}
					onBlur={() => setIsActive(false)}
					className={`flex-1 font-regular text-[16px] text-white ${isAndroid ? '' : 'h-[24px]'}`}
				/>

				{isPassword ? (
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={() => {
							setShowPassword(!showPassword)
						}}
					>
						<Image
							source={showPassword ? ICONS.ShowPassword : ICONS.HidePassword}
							tintColor={COLORS.white}
							className={'h-[24px] w-[24px]'}
							resizeMode={'contain'}
						/>
					</TouchableOpacity>
				) : null}
			</View>
		</View>
	)
}
