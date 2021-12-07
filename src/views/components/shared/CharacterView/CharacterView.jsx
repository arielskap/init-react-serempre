import { connect } from "react-redux";
import Character from "@views/components/shared/Character"
import useControllers from "@controllers";
import useApi from "@api"

const CharacterView = (props) => {
	const { chargeCharacters, characters } = props
	const { useScreenHooks } = useControllers()
	const { useHome } = useScreenHooks()
	const { useCharacters } = useHome()
	useCharacters(chargeCharacters, characters)

	return (
		characters ? characters.map(({ id, image, name }) => {
			return (
				<Character image={image} name={name} key={`character-${id}`} />
			)
		}) : null
	)
}

const mapStateToProps = (reducers) => {
	return reducers.characterReducer
}

export default connect(mapStateToProps, useApi().useActions())(CharacterView)
