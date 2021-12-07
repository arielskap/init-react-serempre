import useServices from "./services"
import useActions from "./actions"

const useApi = () => {
	return {
		useServices,
		useActions
	}
}

export default useApi