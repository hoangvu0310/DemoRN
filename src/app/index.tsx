import { useFonts } from 'expo-font'
import { getLanguage } from '@src/db/storage/LocalStorage'
import { changeAppLanguage, LanguageOptions } from '@src/i18n/i18n.config'
import { useEffect } from 'react'
import { SplashScreen, useRouter } from 'expo-router'

export default function RootApp() {
	const router = useRouter()

	const [fontsLoaded, error] = useFonts({
		'Lato-Black': require('@assets/fonts/Lato-Black.ttf'),
		'Lato-BlackItalic': require('@assets/fonts/Lato-BlackItalic.ttf'),
		'Lato-Bold': require('@assets/fonts/Lato-Bold.ttf'),
		'Lato-BoldItalic': require('@assets/fonts/Lato-BoldItalic.ttf'),
		'Lato-Italic': require('@assets/fonts/Lato-Italic.ttf'),
		'Lato-Light': require('@assets/fonts/Lato-Light.ttf'),
		'Lato-LightItalic': require('@assets/fonts/Lato-LightItalic.ttf'),
		'Lato-Regular': require('@assets/fonts/Lato-Regular.ttf'),
		'Lato-Thin': require('@assets/fonts/Lato-Thin.ttf'),
		'Lato-ThinItalic': require('@assets/fonts/Lato-ThinItalic.ttf'),
	})

	const initializeApp = async () => {
		await loadLanguage()
		// const isFirstTime = await getIsFirstTime()
		// if (isFirstTime ?? null) {
		// 	router.replace('/(onboarding)')
		// } else {
		// 	router.replace('/(auth)/login')
		// }
	}

	const loadLanguage = async () => {
		const language = await getLanguage()
		await changeAppLanguage(language ?? LanguageOptions.vi)
	}

	useEffect(() => {
		initializeApp().then(() => {
			if (error) throw error
			else SplashScreen.hideAsync()

			router.replace('/(onboarding)')
		})
	}, [fontsLoaded, error])

	return <></>
}
