import { useIntl } from "react-intl"

const useDictionary = () => {
	const { formatMessage } = useIntl()
	const getWords = ( id ) => formatMessage( { id } )

	return [getWords]
}

export default useDictionary