import SafeAreaLayout from '@src/components/layout/SafeAreaLayout'
import MainLayout from '@src/components/layout/MainLayout'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import BackButton from '@src/components/buttons/BackButton'
import Spacer from '@src/components/Spacer'
import { useTranslation } from 'react-i18next'
import CommonTextFormField from '@src/components/textfields/CommonTextFormField'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FillButton from '@src/components/buttons/FillButton'
import { COLORS, ICONS } from '@src/constants'
import OutlinedButton from '@src/components/buttons/OutlinedButton'
import { useIsFormEmpty } from '@src/hook/useIsFormEmpty'
import { useRouter } from 'expo-router'

export default function Login() {
	const { t } = useTranslation()
	const router = useRouter()

	const loginSchema = z.object({
		username: z.string().min(1, t('auth.requireUsername')),
		password: z.string().min(1, t('auth.requirePassword')),
	})

	const loginForm = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			username: '',
			password: '',
		},
		mode: 'onChange',
	})
	const isSubmitDisabled = useIsFormEmpty(loginForm)

	const handleSubmitLoginForm = () => {
		router.replace('/(main)/home')
	}

	const onLoginWithGoogle = () => {}
	const onLoginWithApple = () => {}

	return (
		<SafeAreaLayout>
			<MainLayout>
				<BackButton />
				<Spacer height={54} />

				<View className={'flex-1 flex-col justify-center'}>
					<Text className={'font-bold text-[32px] text-white opacity-[0.87]'}>
						{t('auth.login')}
					</Text>
					<Spacer height={54} />

					<Controller
						control={loginForm.control}
						defaultValue={''}
						name={'username'}
						render={({ field: { value, onChange } }) => (
							<CommonTextFormField
								title={t('auth.username')}
								placeholder={t('auth.usernamePlaceholder')}
								onChangeText={(value) => onChange(value)}
								value={value}
							/>
						)}
					/>

					<Spacer height={25} />

					<Controller
						control={loginForm.control}
						defaultValue={''}
						name={'password'}
						render={({ field: { value, onChange } }) => (
							<CommonTextFormField
								title={t('auth.password')}
								placeholder={t('auth.passwordPlaceholder')}
								onChangeText={(value) => onChange(value)}
								value={value}
								isPassword={true}
							/>
						)}
					/>
					<Spacer height={70} />
					<FillButton
						title={t('auth.login')}
						backgroundColor={COLORS.primary}
						onPress={handleSubmitLoginForm}
						disabled={isSubmitDisabled}
						buttonStyle={{ opacity: isSubmitDisabled ? 0.5 : 1 }}
					/>
					<Spacer height={30} />
					<View className={'flex-row items-center gap-2'}>
						<View className={'h-[1px] flex-1 bg-grey2'} />
						<Text className={'text-16px font-regular text-grey2'}>{t('auth.or')}</Text>
						<View className={'h-[1px] flex-1 bg-grey2'} />
					</View>
					<Spacer height={20} />
					<OutlinedButton
						title={t('auth.loginGoogle')}
						borderColor={COLORS.primary}
						onPress={onLoginWithGoogle}
						leadingIconSource={ICONS.Google}
						textStyle={'opacity-[0.87]'}
					/>
					<Spacer height={20} />
					<OutlinedButton
						title={t('auth.loginApple')}
						borderColor={COLORS.primary}
						onPress={onLoginWithApple}
						leadingIconSource={ICONS.Apple}
						textStyle={'opacity-[0.87]'}
					/>
				</View>
				<View className={'gap- flex-row justify-center gap-1'}>
					<Text className={'font-regular text-[12px] text-grey2'}>
						{t('auth.dontHaveAnAccount')}
					</Text>
					<TouchableWithoutFeedback
						onPress={() => {
							if (router.canGoBack()) router.replace('/(auth)/register')
							else router.navigate('/(auth)/register')
						}}
					>
						<Text className={'font-regular text-[12px] text-white opacity-[0.87]'}>
							{t('auth.register')}
						</Text>
					</TouchableWithoutFeedback>
				</View>
			</MainLayout>
		</SafeAreaLayout>
	)
}
