import { connect } from "react-redux";
import { useCharacters } from "@controllers/hooks/useCharacters";
import * as characterActions from "@controllers/actions/characterActions"
import Character from "@views/components/shared/Character"

const CharacterView = (props) => {
	const { chargeCharacters, characters } = props
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

export default connect(mapStateToProps, characterActions)(CharacterView)
