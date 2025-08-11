import { View, Text } from 'react-native'
import { getIsFirstTime } from '@src/db/storage/LocalStorage'
import { Redirect } from 'expo-router'

export default async function Onboarding() {
	// const isFirstTime = await getIsFirstTime()
	// if (isFirstTime) {
	// 	return <Redirect href={'./(auth)/'} />
	// }

	return (
		<View>
			<Text>Hello World!</Text>
		</View>
	)
}
