import tw, { styled } from 'twin.macro'

export const StyledSection = styled.section.attrs({
	className: "StyledSection"
})`
	${tw`flex items-center justify-center`}
`;

export const StyledText = styled.p.attrs({
	className: "StyledText"
})`
	${tw`text-center`}
`;