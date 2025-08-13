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

export default function Register() {
	const { t } = useTranslation()
	const router = useRouter()

	const registerSchema = z.object({
		username: z.string().min(1, t('auth.requireUsername')),
		password: z.string().min(1, t('auth.requirePassword')),
		confirmPassword: z.string().min(1, t('auth.requireConfirmPassword')),
	})

	const registerForm = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: '',
			password: '',
			confirmPassword: '',
		},
		mode: 'onChange',
	})

	const handleSubmitRegisterForm = () => {
		router.push('/(main)/home')
	}

	const onRegisterWithGoogle = () => {}
	const onRegisterWithApple = () => {}

	return (
		<SafeAreaLayout>
			<MainLayout>
				<BackButton />
				<Spacer height={16} />

				<View className={'flex-1 flex-col justify-center'}>
					<Text className={'font-bold text-[32px] text-white opacity-[0.87]'}>
						{t('auth.register')}
					</Text>
					<Spacer height={24} />

					<Controller
						control={registerForm.control}
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
					{registerForm.formState.errors.username && (
						<Text className={'px-[12px] pt-[6px] font-regular text-[12px] text-error'}>
							{registerForm.formState.errors.username.message}
						</Text>
					)}

					<Spacer height={25} />

					<Controller
						control={registerForm.control}
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
					{registerForm.formState.errors.password && (
						<Text className={'px-[12px] pt-[6px] font-regular text-[12px] text-error'}>
							{registerForm.formState.errors.password.message}
						</Text>
					)}

					<Spacer height={25} />

					<Controller
						control={registerForm.control}
						defaultValue={''}
						name={'confirmPassword'}
						render={({ field: { value, onChange } }) => (
							<CommonTextFormField
								title={t('auth.confirmPassword')}
								placeholder={t('auth.confirmPasswordPlaceholder')}
								onChangeText={(value) => onChange(value)}
								value={value}
								isPassword={true}
							/>
						)}
					/>
					{registerForm.formState.errors.confirmPassword && (
						<Text className={'px-[12px] pt-[6px] font-regular text-[12px] text-error'}>
							{registerForm.formState.errors.confirmPassword.message}
						</Text>
					)}
					<Spacer height={40} />
					<FillButton
						title={t('auth.register')}
						backgroundColor={COLORS.primary}
						onPress={registerForm.handleSubmit(handleSubmitRegisterForm)}
						// disabled={isSubmitDisabled}
						// buttonStyle={{ opacity: isSubmitDisabled ? 0.5 : 1 }}
					/>
					<Spacer height={18} />
					<View className={'flex-row items-center gap-2'}>
						<View className={'h-[1px] flex-1 bg-grey2'} />
						<Text className={'text-16px font-regular text-grey2'}>{t('auth.or')}</Text>
						<View className={'h-[1px] flex-1 bg-grey2'} />
					</View>
					<Spacer height={24} />
					<OutlinedButton
						title={t('auth.registerGoogle')}
						borderColor={COLORS.primary}
						onPress={onRegisterWithGoogle}
						leadingIconSource={ICONS.Google}
						textStyle={'opacity-[0.87]'}
					/>
					<Spacer height={20} />
					<OutlinedButton
						title={t('auth.registerApple')}
						borderColor={COLORS.primary}
						onPress={onRegisterWithApple}
						leadingIconSource={ICONS.Apple}
						textStyle={'opacity-[0.87]'}
					/>
				</View>
				<View className={'gap- flex-row justify-center gap-1'}>
					<Text className={'font-regular text-[12px] text-grey2'}>
						{t('auth.alreadyHaveAnAccount')}
					</Text>
					<TouchableWithoutFeedback
						onPress={() => {
							if (router.canGoBack()) router.replace('/(auth)/login')
							else router.navigate('/(auth)/login')
						}}
					>
						<Text className={'font-regular text-[12px] text-white opacity-[0.87]'}>
							{t('auth.login')}
						</Text>
					</TouchableWithoutFeedback>
				</View>
			</MainLayout>
		</SafeAreaLayout>
	)
}
