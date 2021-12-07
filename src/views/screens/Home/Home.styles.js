import tw, { styled } from 'twin.macro'

export const StyledSection = styled.section.attrs({
	className: "StyledSection"
})`
	${tw`grid grid-cols-5 gap-2`}
`;