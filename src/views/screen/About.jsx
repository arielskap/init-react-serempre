import Layout from "@views/layouts/ScreenLayout"
import { useDictionary } from "@controllers/hooks/useDictionary";

const About = () => {
	const [getWords] = useDictionary()

	return (
		<Layout title={getWords("title")}>
			<section className="flex items-center justify-center">
				<p className="text-center">Somos más que una empresa que desarrolla software. Somos un equipo de expertos y expertas, listos para afrontar los retos más complejos.</p>
			</section>
		</Layout>
	)
}

export default About
