import { StyledButtonContainer, StyledImage, StyledName } from "./Character.styles"

const Character = (props) => {
	const { name, image } = props

	return (
		<StyledButtonContainer>
			<StyledImage src={image} alt={name}/>
			<StyledName>{name}</StyledName>
		</StyledButtonContainer>
	)
}

export default Character
