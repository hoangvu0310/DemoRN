import { DIMENSIONS } from '@src/constants'
import { StyleProp, View, ViewStyle } from 'react-native'

type MainLayoutProps = React.PropsWithChildren<{
	withHorizontalPadding?: boolean
	containerStyle?: StyleProp<ViewStyle>
}>

export default function MainLayout({
	children,
	withHorizontalPadding = true,
	containerStyle,
}: MainLayoutProps) {
	return (
		<View
			className={'flex-1'}
			style={[
				{
					paddingHorizontal: withHorizontalPadding ? DIMENSIONS.horizontalPadding : 0,
					paddingTop: 14,
				},
				containerStyle,
			]}
		>
			{children}
		</View>
	)
}
