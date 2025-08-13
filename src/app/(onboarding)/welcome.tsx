import { View, Text } from 'react-native'
import SafeAreaLayout from '@src/components/layout/SafeAreaLayout'
import MainLayout from '@src/components/layout/MainLayout'
import BackButton from '@src/components/buttons/BackButton'
import { useTranslation } from 'react-i18next'
import Spacer from '@src/components/Spacer'
import FillButton from '@src/components/buttons/FillButton'
import { COLORS } from '@src/constants'
import OutlinedButton from '@src/components/buttons/OutlinedButton'
import { useRouter } from 'expo-router'
import { setIsFirstTime } from '@src/db/storage/LocalStorage'

export default function Welcome() {
	const { t } = useTranslation()
	const router = useRouter()

	const onPressLogin = async () => {
		router.push('/(auth)/login')
		await setIsFirstTime(false)
	}

	const onPressCreateAccount = async () => {
		router.push('/(auth)/register')
		await setIsFirstTime(false)
	}

	return (
		<SafeAreaLayout>
			<MainLayout>
				<BackButton />
				<Spacer height={58} />
				<View className={'flex-1 justify-between items-center'}>
					<View className={'items-center'}>
						<Text className={'font-bold text-white text-[32px] opacity-[0.87]'}>
							{t('onboarding.welcomeTitle')}
						</Text>
						<Spacer height={26} />
						<Text className={'text-center font-regular text-white text-[16px] opacity-[0.67]'}>
							{t('onboarding.welcomeDescription')}
						</Text>
					</View>
					<View className={'w-full flex-col items-center pb-[54px]'}>
						<FillButton
							title={t('onboarding.login')}
							backgroundColor={COLORS.secondary}
							onPress={onPressLogin}
							buttonStyle={{ width: '100%' }}
						/>
						<Spacer height={28} />
						<OutlinedButton
							title={t('onboarding.createAccount')}
							borderColor={COLORS.secondary}
							onPress={onPressCreateAccount}
							buttonStyle={{ width: '100%' }}
							textStyle={'opacity-100'}
						/>
					</View>
				</View>
			</MainLayout>
		</SafeAreaLayout>
	)
}
