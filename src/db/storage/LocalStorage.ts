import AsyncStorage from '@react-native-async-storage/async-storage'
import { LanguageOptions } from '@src/i18n/i18n.config'

export async function getIsFirstTime(): Promise<boolean | null> {
	const isFirstTime = await AsyncStorage.getItem('isFirstTime')
	return isFirstTime === 'true'
}

export async function setIsFirstTime(isFirstTime: boolean): Promise<void> {
	await AsyncStorage.setItem('isFirstTime', isFirstTime ? 'true' : 'false')
}

export async function getLanguage(): Promise<LanguageOptions | null> {
	return (await AsyncStorage.getItem('language')) as LanguageOptions | null
}

export async function setLanguage(language: string): Promise<void> {
	await AsyncStorage.setItem('language', language)
}
