import Layout from "@components/Layout"
import { Link } from "react-router-dom";
import Title from "../components/Title/Title";

const About = () => {
	return (
		<Layout>
			<Title>Hola estas en About! 🏄🏻‍♂️</Title>
			<nav>
        <Link to="/">Home</Link>
      </nav>
		</Layout>
	)
}

export default About
