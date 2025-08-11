import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getIsFirstTime(): Promise<boolean | null> {
	const isFirstTime = await AsyncStorage.getItem('isFirstTime')
	return isFirstTime === 'true'
}

export async function setIsFirstTime(isFirstTime: boolean): Promise<void> {
	await AsyncStorage.setItem('isFirstTime', isFirstTime ? 'true' : 'false')
}
