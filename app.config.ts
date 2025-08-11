import {ConfigContext, ExpoConfig} from "@expo/config";

export default ({config}: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: 'Demo React Native',
    slug: 'demo-react-native',
    version: '1.0.0',
    orientation: 'portrait',
    scheme: 'demo-react-native',
    userInterfaceStyle: "automatic",
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
    },

    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/favicon.png',
    },

    plugins: [
      'expo-router',
      'expo-font',
    ],

    experiments: {
      typedRoutes: true,
    },
  }
}
