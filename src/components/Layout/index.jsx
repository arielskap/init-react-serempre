import SerempreLogoImg from "@images/logo.png"
import Title from "../Title"
import { Link } from "react-router-dom"

const Layout = ({ children, title }) => {
	return (
		<section className="flex flex-col min-h-screen">
			<header>
				<div className="py-2 bg-blue-200">
					<div className="container grid grid-cols-3 px-2 mx-auto">
						<img className="object-contain w-16" src={SerempreLogoImg} alt="Serempre"/>
						<div className="flex flex-col items-center justify-center text-center">
							<Title>{title}</Title>
							<p className="text-xs">"{process.env.SECRET_WORD || "No se agrego en la variable de entorno..."}"</p>
						</div>
					</div>
				</div>
				<nav className="bg-blue-300">
					<ul className="container flex px-2 mx-auto space-x-4 text-white">
						<li className="hover:underline">
							<Link to="/">Home</Link>
						</li>
						<li className="hover:underline">
						<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className="container flex-grow px-2 pt-2 mx-auto">
				{children}
			</main>
		</section>
	)
}

export default Layout
