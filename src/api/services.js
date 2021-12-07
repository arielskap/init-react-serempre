export const getCharacters = async () => {
	const result = await fetch("https://rickandmortyapi.com/api/character")
	const characters = await result.json()
	return characters.results
}