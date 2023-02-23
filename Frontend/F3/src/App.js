import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UntreecoByHtmltodesign from "./pages/UntreecoByHtmltodesign";
import Iframe from "./pages/Iframe";
import Desktop7 from "./pages/Desktop7";
import Desktop2 from "./pages/Desktop2";
import Desktop1 from "./pages/Desktop1";
import WwwstanzalivingcomByHtmlt from "./pages/WwwstanzalivingcomByHtmlt";
import Desktop71 from "./pages/Desktop71";
import Desktop5 from "./pages/Desktop5";
import UntreecoByHtmltodesign1 from "./pages/UntreecoByHtmltodesign1";
import Iframe1 from "./pages/Iframe1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iframe1":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-7":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
        title = "";
        metaDescription = "";
        break;
      case "/wwwstanzalivingcom-by-htmltodesign-free-version-22022023-202736-gmt530":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-71":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-5":
        title = "";
        metaDescription = "";
        break;
      case "/untreeco-by-htmltodesign-free-version-20022023-101231-gmt530":
        title = "";
        metaDescription = "";
        break;
      case "/iframe":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UntreecoByHtmltodesign />} />

      <Route path="/iframe1" element={<Iframe />} />

      <Route path="/desktop-7" element={<Desktop7 />} />

      <Route path="/desktop-2" element={<Desktop2 />} />

      <Route path="/desktop-1" element={<Desktop1 />} />

      <Route
        path="/wwwstanzalivingcom-by-htmltodesign-free-version-22022023-202736-gmt530"
        element={<WwwstanzalivingcomByHtmlt />}
      />

      <Route path="/desktop-71" element={<Desktop71 />} />

      <Route path="/desktop-5" element={<Desktop5 />} />

      <Route
        path="/untreeco-by-htmltodesign-free-version-20022023-101231-gmt530"
        element={<UntreecoByHtmltodesign1 />}
      />

      <Route path="/iframe" element={<Iframe1 />} />
    </Routes>
  );
}
export default App;
