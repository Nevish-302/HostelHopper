import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop7 from "./pages/Desktop7";
import Desktop2 from "./pages/Desktop2";
import Desktop1 from "./pages/Desktop1";
import WwwstanzalivingcomByHtmlt from "./pages/WwwstanzalivingcomByHtmlt";
import UntreecoByHtmltodesign from "./pages/UntreecoByHtmltodesign";
import Iframe from "./pages/Iframe";
import Desktop21 from "./pages/Desktop21";
import Desktop11 from "./pages/Desktop11";
import Desktop6 from "./pages/Desktop6";
import UntreecoByHtmltodesign1 from "./pages/UntreecoByHtmltodesign1";
import Iframe1 from "./pages/Iframe1";
import Desktop71 from "./pages/Desktop71";
import Desktop22 from "./pages/Desktop22";
import Desktop12 from "./pages/Desktop12";
import Desktop5 from "./pages/Desktop5";
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
      case "/untreeco-by-htmltodesign-free-version-20022023-101231-gmt530":
        title = "";
        metaDescription = "";
        break;
      case "/iframe":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-21":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-11":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-6":
        title = "";
        metaDescription = "";
        break;
      case "/untreeco-by-htmltodesign-free-version-20022023-101231-gmt5301":
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
      case "/desktop-22":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-12":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-5":
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
      <Route path="/" element={<Desktop7 />} />

      <Route path="/desktop-2" element={<Desktop2 />} />

      <Route path="/desktop-1" element={<Desktop1 />} />

      <Route
        path="/wwwstanzalivingcom-by-htmltodesign-free-version-22022023-202736-gmt530"
        element={<WwwstanzalivingcomByHtmlt />}
      />

      <Route
        path="/untreeco-by-htmltodesign-free-version-20022023-101231-gmt530"
        element={<UntreecoByHtmltodesign />}
      />

      <Route path="/iframe" element={<Iframe />} />

      <Route path="/desktop-21" element={<Desktop21 />} />

      <Route path="/desktop-11" element={<Desktop11 />} />

      <Route path="/desktop-6" element={<Desktop6 />} />

      <Route
        path="/untreeco-by-htmltodesign-free-version-20022023-101231-gmt5301"
        element={<UntreecoByHtmltodesign1 />}
      />

      <Route path="/iframe1" element={<Iframe1 />} />

      <Route path="/desktop-7" element={<Desktop71 />} />

      <Route path="/desktop-22" element={<Desktop22 />} />

      <Route path="/desktop-12" element={<Desktop12 />} />

      <Route path="/desktop-5" element={<Desktop5 />} />
    </Routes>
  );
}
export default App;
