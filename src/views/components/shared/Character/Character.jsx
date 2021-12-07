import Style from "./Character.styles"

const Character = ({ name, image }) => {
	return (
		<Style.ButtonContainer>
			<Style.Image src={image} alt={name}/>
			<Style.Name>{name}</Style.Name>
		</Style.ButtonContainer>
	)
}

export default Character
