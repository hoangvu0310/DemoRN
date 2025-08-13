import { useEffect, useState } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'

export function useIsFormEmpty<T extends FieldValues>(form: UseFormReturn<T>) {
	const { watch } = form
	const [isEmpty, setIsEmpty] = useState(true)

	useEffect(() => {
		const subscription = watch((values) => {
			// Kiểm tra tất cả field xem có field nào rỗng hoặc chỉ chứa khoảng trắng
			const empty = Object.values(values).some((value) => {
				if (value === undefined || value === null) return true
				return typeof value === 'string' && !value.trim()
			})
			setIsEmpty(empty)
		})
		return () => subscription.unsubscribe()
	}, [watch])

	return isEmpty
}
