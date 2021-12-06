import { Routes, Route, useLocation } from "react-router-dom";
import About from "@pages/About";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import * as locales from "../lang"
import { IntlProvider } from "react-intl";

function App() {
  const location = useLocation()
  const { pathname } = location
  const locale = pathname.split("/")[0] || "es"
  const localeActual = locales[locale]
	const messages = localeActual[pathname]

  return (
    <div className="App">
    <IntlProvider
			locale={locale}
			defaultLocale="es"
			messages={messages}
		>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </IntlProvider>
    </div>
  );
}

export default App