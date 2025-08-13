import { Platform } from 'react-native'

export default function useIsAndroid() {
	return Platform.OS === 'android'
}
