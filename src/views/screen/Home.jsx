import Layout from "@views/layouts/ScreenLayout"
import CharacterView from "@views/components/shared/CharacterView"
import { useDictionary } from "@controllers/hooks/useDictionary";

const Home = () => {
	const [getWords] = useDictionary()

	return (
		<Layout title={getWords("title")}>
			<section className="grid grid-cols-5 gap-2">
				<CharacterView />
			</section>
		</Layout>
	)
}



export default Home
