import useComponents from "./components"
import useLayouts from "./layouts"
import useScreens from "./screens"

const useViews = () => {
	return {
		useComponents,
		useLayouts,
		useScreens
	}
}

export default useViews