export default function isEmptyString(value: string) {
	return !value || value.trim() === ''
}
