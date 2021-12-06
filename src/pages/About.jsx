import Layout from "@components/Layout"
import { Link } from "react-router-dom";
import Title from "../components/Title/Title";
import { connect } from "react-redux";
import * as usuariosActions from "../actions/usuariosActions";
import { useEffect } from "react";

const About = (props) => {
	useEffect(() => {
		props.getAll()
	}, [])

	return (
		<Layout>
			<Title>Hola estas en About! 🏄🏻‍♂️</Title>
			<nav>
        <Link to="/">Home</Link>
      </nav>
		</Layout>
	)
}

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer
}

export default connect(mapStateToProps, usuariosActions)(About)
