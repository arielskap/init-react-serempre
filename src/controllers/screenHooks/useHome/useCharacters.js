import useApi from "@api"
import { useEffect } from "react"

const useCharacters = (funcChargeCharacter, charactersData = []) => {
	const { useServices } = useApi()
	const { getCharacters } = useServices()

	useEffect(() => {
		if (!charactersData || !charactersData.length) {
			const fetchCharacters = async () => {
				const characters = await getCharacters()
				funcChargeCharacter(characters)
			}
			fetchCharacters()
		}
	}, [charactersData])

	return charactersData
}

export default useCharacters