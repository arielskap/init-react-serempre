import tw, { styled } from 'twin.macro'

export const StyledContainer = styled.section.attrs({
	className: "StyledContainer"
})`
	${tw`flex flex-col min-h-screen`}
`;

export const StyledHeaderBar = styled.div.attrs({
	className: "StyledHeaderBar"
})`
	${tw`py-2 bg-blue-200`}
`;

export const StyledHeaderBarContainer = styled.div.attrs({
	className: "StyledHeaderBarContainer"
})`
	${tw`container grid grid-cols-3 px-2 mx-auto`}
`;

export const StyledHeaderBarImg = styled.img.attrs({
	className: "StyledHeaderBarImg"
})`
	${tw`object-contain w-16`}
`;

export const StyledHeaderBarTitleSection = styled.section.attrs({
	className: "StyledHeaderBarTitleSection"
})`
	${tw`flex flex-col items-center justify-center text-center`}
`;

export const StyledHeaderBarTitleSectionText = styled.p.attrs({
	className: "StyledHeaderBarTitleSection"
})`
	${tw`text-xs`}
`;

export const StyledHeaderNav = styled.nav.attrs({
	className: "StyledHeaderNav"
})`
	${tw`bg-blue-300`}
`;

export const StyledHeaderNavContainer = styled.ul.attrs({
	className: "StyledHeaderNavContainer"
})`
	${tw`container flex px-2 mx-auto space-x-4 text-white`}
`;

export const StyledHeaderNavList = styled.li.attrs({
	className: "StyledHeaderNavList"
})`
	${tw`hover:underline`}
`;

export const StyledMain = styled.main.attrs({
	className: "StyledMain"
})`
	${tw`container flex-grow px-2 pt-2 mx-auto`}
`;