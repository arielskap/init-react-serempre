import { Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Modal from 'react-modal';
import useViews from "@views"
import useControllers from "@controllers";

Modal.setAppElement('#root-modal');

const App = () => {
  const { useScreens } = useViews()
  const { Home, About, NotFound } = useScreens()
  const { useGeneralHooks } = useControllers()
  const { useIntlInit } = useGeneralHooks()
  const config = useIntlInit()

  return (
    <div className="App">
      <IntlProvider
        {...config}
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