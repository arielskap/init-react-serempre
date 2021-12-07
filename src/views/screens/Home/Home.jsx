import CharacterView from "@views/components/shared/CharacterView"
import useLayouts from "@views/layouts";
import useControllers from "@controllers"
import { StyledSection } from "./Home.styles"

const Home = () => {
	const { ScreenLayout } = useLayouts()
	const { useGeneralHooks } = useControllers()
	const { useDictionary } = useGeneralHooks()
	const [getWords] = useDictionary()

	return (
		<ScreenLayout title={getWords("title")}>
			<StyledSection>
				<CharacterView />
			</StyledSection>
		</ScreenLayout>
	)
}



export default Home
