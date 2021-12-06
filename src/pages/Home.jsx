import Layout from "@components/Layout"
import { Link } from "react-router-dom";
import Title from "../components/Title/Title";
import { useDictionary } from "../hooks/useDictionary";

const Home = () => {
	const [getWords] = useDictionary()

	return (
		<Layout>
			<Title>{getWords("title")}</Title>
			<p>Palabra secreta: "{process.env.SECRET_WORD || "No se agrego en la variable de entorno..."}"</p>
			<nav>
        <Link to="/about">About</Link>
      </nav>
		</Layout>
	)
}

export default Home
