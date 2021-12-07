import { useLocation } from "react-router"
import useConfig from "@config"

const useIntlInit = () => {
	const location = useLocation()
	const { useLang } = useConfig()
	const locales = useLang()
  const { pathname } = location
  const locale = pathname.split("/")[0] || "es"
  const localeActual = locales[locale]
	const messages = localeActual[pathname]

	return {
		locale,
		defaultLocale: "es",
		messages
	}
}

export default useIntlInit