import Layout from "@components/Layout"
import { useEffect } from "react";
import { useDictionary } from "../hooks/useDictionary";
import { connect } from "react-redux";
import * as characterActions from "../actions/characterActions"

const Home = (props) => {
	const [getWords] = useDictionary()

	useEffect(() => {
		const fetchCharacters = async () => {
			const result = await fetch("https://rickandmortyapi.com/api/character")
			const characters = await result.json()
			props.chargeCharacters(characters.results)
		}
		fetchCharacters()
	}, [])

	return (
		<Layout title={getWords("title")}>
			<section className="grid grid-cols-5 gap-2">
				{props.characters.map(({ id, image, name }) => {
					return (
						<div className="p-2 border border-blue-200 rounded-xl" key={`character-${id}`}>
							<img src={image} alt={name}/>
							<p className="font-bold text-center">{name}</p>
						</div>
					)
				})}
			</section>
		</Layout>
	)
}

const mapStateToProps = (reducers) => {
	return reducers.characterReducer
}

export default connect(mapStateToProps, characterActions)(Home)
