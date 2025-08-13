import { ConfigContext, ExpoConfig } from '@expo/config'

export default ({ config }: ConfigContext): ExpoConfig => {
	return {
		...config,
		name: 'Demo React Native',
		slug: 'demo-react-native',
		version: '1.0.0',
		orientation: 'portrait',
		scheme: 'demo-react-native',
		userInterfaceStyle: 'automatic',
		icon: './assets/icon.png',
		newArchEnabled: true,

		splash: {
			image: './assets/splash-icon.png',
			resizeMode: 'contain',
			backgroundColor: '#ffffff',
		},

		ios: {
			supportsTablet: true,
			config: {
				usesNonExemptEncryption: false,
			},
		},

		android: {
			adaptiveIcon: {
				foregroundImage: './assets/adaptive-icon.png',
				backgroundColor: '#ffffff',
			},
			package: 'com.anonymous.demoreactnative',
			edgeToEdgeEnabled: true,
		},

		web: {
			bundler: 'metro',
			output: 'static',
			favicon: './assets/favicon.png',
		},

		plugins: [
			'expo-router',
			'expo-font',
			[
				'expo-splash-screen',
				{
					backgroundColor: '#000000',
					image: './assets/splash-icon.png',
					imageWidth: 200,
				},
			],
		],

		experiments: {
			typedRoutes: true,
		},
	}
}
