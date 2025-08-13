import { View } from 'react-native'
import { JSX } from 'react'

type SpacerProps = {
	width?: number
	height?: number
}

export default function Spacer({ width, height }: SpacerProps): JSX.Element {
	return <View style={{ width: width, height: height }} />
}
