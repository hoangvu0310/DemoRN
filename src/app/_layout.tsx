import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import '@/global.css'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			<Stack>
				<Stack.Screen name={'index'} options={{ headerShown: false }} />
				<Stack.Screen name={'(onboarding)'} options={{ headerShown: false }} />
				<Stack.Screen name={'(auth)'} options={{ headerShown: false }} />
				{/*<Stack.Screen name={'main'} options={{ headerShown: false }} />*/}
			</Stack>
			{/*<StatusBar backgroundColor={COLORS.background} />*/}
		</SafeAreaProvider>
	)
}
