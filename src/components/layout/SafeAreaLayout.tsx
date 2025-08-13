import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'

type SafeAreaLayoutProps = React.PropsWithChildren<{}>

export default function SafeAreaLayout({ children }: SafeAreaLayoutProps) {
	return (
		<SafeAreaView className={'flex-1 bg-background'}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View className={'flex-1'}>{children}</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	)
}
