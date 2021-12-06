import { useIntl } from "react-intl"

export const useDictionary = () => {
	const { formatMessage } = useIntl()
	const getWords = ( id ) => formatMessage( { id } )

	return [getWords]
}