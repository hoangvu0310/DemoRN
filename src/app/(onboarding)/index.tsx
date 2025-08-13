import { FlatList, Image, Text, TouchableWithoutFeedback, View, ViewToken } from 'react-native'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { COLORS, DIMENSIONS, IMAGES } from '@src/constants'
import Spacer from '@src/components/Spacer'
import FillButton from '@src/components/buttons/FillButton'
import OutlinedButton from '@src/components/buttons/OutlinedButton'
import { useRef, useState } from 'react'
import SafeAreaLayout from '@src/components/layout/SafeAreaLayout'
import MainLayout from '@src/components/layout/MainLayout'

export default function Onboarding() {
	const { t } = useTranslation()
	const router = useRouter()

	const [currentPage, setCurrentPage] = useState<number>(0)
	const onboardingListRef = useRef<FlatList>(null)

	const onboardingData = [
		{
			id: '1',
			imageSrc: IMAGES.Onboarding1,
			title: t('onboarding.title1'),
			description: t('onboarding.description1'),
		},
		{
			id: '2',
			imageSrc: IMAGES.Onboarding2,
			title: t('onboarding.title2'),
			description: t('onboarding.description2'),
		},
		{
			id: '3',
			imageSrc: IMAGES.Onboarding3,
			title: t('onboarding.title3'),
			description: t('onboarding.description3'),
		},
	]
	const onSkipOnboarding = () => {
		router.push('/(onboarding)/welcome')
	}

	const onNext = () => {
		if (currentPage !== 2) {
			onboardingListRef.current?.scrollToIndex({ animated: true, index: currentPage + 1 })
		} else {
			router.push('/(onboarding)/welcome')
		}
	}

	const onBack = () => {
		if (currentPage !== 0) {
			onboardingListRef.current?.scrollToIndex({ animated: true, index: currentPage - 1 })
		}
	}

	// Use if you need to or want to use Animated transition on the indicator
	// const scrollX = useRef(new Animated.Value(0)).current
	// const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
	// 	useNativeDriver: false,
	// })

	const handleViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
		if (viewableItems.length > 0) {
			setCurrentPage(viewableItems[0].index ?? 0)
		}
	}).current

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

	const getItemLayout = (data: any, index: number) => ({
		length: DIMENSIONS.width,
		offset: DIMENSIONS.width * index,
		index,
	})

	return (
		<SafeAreaLayout>
			<MainLayout withHorizontalPadding={false}>
				<View style={{ paddingHorizontal: DIMENSIONS.horizontalPadding }}>
					<TouchableWithoutFeedback onPress={onSkipOnboarding}>
						<Text className={'font-regular text-[16px] text-white opacity-[0.44]'}>
							{t('onboarding.skip')}
						</Text>
					</TouchableWithoutFeedback>
				</View>

				<Spacer height={10} />
				<View className={'flex-1 flex-col justify-start'}>
					<FlatList
						ref={onboardingListRef}
						keyExtractor={(item) => item.id}
						scrollEnabled={true}
						horizontal={true}
						pagingEnabled={true}
						overScrollMode={'never'}
						getItemLayout={getItemLayout}
						viewabilityConfig={viewConfig}
						// onScroll={handleScroll}
						onViewableItemsChanged={handleViewableItemsChanged}
						showsHorizontalScrollIndicator={false}
						data={onboardingData}
						renderItem={({ item }) => {
							return (
								<View className={'items-center'} style={{ width: DIMENSIONS.width }}>
									<Image source={item.imageSrc} resizeMode={'contain'} className={'w-[70%]'} />
									<Spacer height={50} />
									<Text className={'text-white font-bold text-[32px] opacity-[0.87]'}>
										{item.title}
									</Text>
									<Spacer height={40} />
									<Text
										className={'text-white font-regular text-[16px] opacity-[0.87] text-center'}
									>
										{item.description}
									</Text>
								</View>
							)
						}}
					/>

					<View className={'flex-1 flex-row justify-center items-start'}>
						{onboardingData.map((item, index) => {
							const isActive = index === currentPage
							return (
								<View
									key={item.id}
									className={`w-[26px] h-[4px] mx-[8px] rounded-[56px] ${isActive ? 'bg-white' : 'bg-grey1'}`}
								/>
							)
						})}
					</View>
				</View>

				<View
					className={'flex flex-row items-end justify-between'}
					style={{ paddingHorizontal: DIMENSIONS.horizontalPadding }}
				>
					<OutlinedButton
						title={t('onboarding.back')}
						borderColor={COLORS.secondary}
						onPress={onBack}
					/>
					<FillButton
						title={currentPage === 2 ? t('onboarding.getStarted') : t('onboarding.next')}
						backgroundColor={COLORS.secondary}
						onPress={onNext}
					/>
				</View>
			</MainLayout>
		</SafeAreaLayout>
	)
}
