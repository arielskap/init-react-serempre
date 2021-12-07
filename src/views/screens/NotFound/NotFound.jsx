import Title from "@views/components/shared/Title"

const NotFound = () => {
	const { ScreenLayout } = useLayouts()

	return (
		<ScreenLayout>
			<Title>Pagina no encontrada 😵‍💫</Title>
		</ScreenLayout>
	)
}

export default NotFound
