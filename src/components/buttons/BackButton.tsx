import { Image, TouchableOpacity } from 'react-native'
import { ICONS } from '@src/constants'
import { useRouter } from 'expo-router'

export default function BackButton() {
	const router = useRouter()
	const canGoBack = router.canGoBack()

	const onPressBack = () => {
		if (canGoBack) router.back()
	}

	return (
		<TouchableOpacity
			style={{ display: canGoBack ? 'flex' : 'none' }}
			activeOpacity={0.9}
			onPress={onPressBack}
		>
			<Image source={ICONS.Back} />
		</TouchableOpacity>
	)
}
