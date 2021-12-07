import { useLocation } from "react-router"
import * as locales from "@config/lang"

export const useIntlInit = () => {
	const location = useLocation()
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