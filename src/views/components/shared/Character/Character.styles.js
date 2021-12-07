import tw, { styled } from 'twin.macro'

const ButtonContainer = styled.button.attrs({
	className: "ButtonContainer"
})`
	${tw`transition-transform duration-500 transform border border-blue-200 cursor-pointer rounded-xl hover:scale-105`}
`;

const Image = styled.img.attrs({
	className: "Image"
})`
	${tw`object-contain rounded-t-xl`}
`;

const Name = styled.p.attrs({
	className: "Name"
})`
	${tw`font-bold text-center`}
`;

const Styles = {
	ButtonContainer,
	Image,
	Name
}

export default Styles