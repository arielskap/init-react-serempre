import useAssets from "@assets"
import Title from "@views/components/shared/Title"
import { Link } from "react-router-dom"
import {
	StyledContainer,
	StyledHeaderBar,
	StyledHeaderBarContainer,
	StyledHeaderBarImg,
	StyledHeaderBarTitleSection,
	StyledHeaderBarTitleSectionText,
	StyledHeaderNav,
	StyledHeaderNavContainer,
	StyledHeaderNavList,
	StyledMain
} from "./ScreenLayout.styles"

const ScreenLayout = ({ children, title }) => {
	const { useImages } = useAssets()
	const { SerempreLogoImg } = useImages()

	return (
		<StyledContainer>
			<header>
				<StyledHeaderBar>
					<StyledHeaderBarContainer>
						<StyledHeaderBarImg src={SerempreLogoImg} alt="Serempre"/>
						<StyledHeaderBarTitleSection>
							<Title>{title}</Title>
							<StyledHeaderBarTitleSectionText>"{process.env.SECRET_WORD || "No se agrego en la variable de entorno..."}"</StyledHeaderBarTitleSectionText>
						</StyledHeaderBarTitleSection>
					</StyledHeaderBarContainer>
				</StyledHeaderBar>
				<StyledHeaderNav>
					<StyledHeaderNavContainer>
						<StyledHeaderNavList>
							<Link to="/">Home</Link>
						</StyledHeaderNavList>
						<StyledHeaderNavList>
							<Link to="/about">About</Link>
						</StyledHeaderNavList>
					</StyledHeaderNavContainer>
				</StyledHeaderNav>
			</header>
			<StyledMain>
				{children}
			</StyledMain>
		</StyledContainer>
	)
}

export default ScreenLayout
