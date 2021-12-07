import useLayouts from "@views/layouts";
import useControllers from "@controllers"
import {
	StyledSection,
	StyledText
} from "./About.styles"

const About = () => {
	const { ScreenLayout } = useLayouts()
	const { useGeneralHooks } = useControllers()
	const { useDictionary } = useGeneralHooks()
	const [getWords] = useDictionary()

	return (
		<ScreenLayout title={getWords("title")}>
			<StyledSection>
				<StyledText>Somos más que una empresa que desarrolla software. Somos un equipo de expertos y expertas, listos para afrontar los retos más complejos.</StyledText>
			</StyledSection>
		</ScreenLayout>
	)
}

export default About
