import { Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Modal from 'react-modal';
import About from "@views/screen/About";
import Home from "@views/screen/Home";
import NotFound from "@views/screen/NotFound";
import { useIntlInit } from "@controllers/hooks/useIntlInit";

Modal.setAppElement('#root-modal');

const App = () => {
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