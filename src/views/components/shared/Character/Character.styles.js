import tw, { styled } from 'twin.macro'

export const StyledButtonContainer = styled.button.attrs({
	className: "StyledButtonContainer"
})`
	${tw`transition-transform duration-500 transform border border-blue-200 cursor-pointer rounded-xl hover:scale-105`}
`;

export const StyledImage = styled.img.attrs({
	className: "StyledImage"
})`
	${tw`object-contain rounded-t-xl`}
`;

export const StyledName = styled.p.attrs({
	className: "StyledName"
})`
	${tw`font-bold text-center`}
`;
