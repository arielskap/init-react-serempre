import { getCharacters } from "@api/services"
import { useEffect } from "react"

export const useCharacters = (funcChargeCharacter, charactersData = []) => {
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