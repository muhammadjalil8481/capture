import Nav from "./Components/Nav";
import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import MovieDetails from "./Pages/movieDetails";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* <Routes>
        <Route path="/" element={<AboutUs />} exact />
        <Route path="/work" element={<Work />} exact />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work/:id" element={<MovieDetails />} />
      </Routes> */}

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <Work />
          </Route>
          <Route path="/work/:id">
            <MovieDetails />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
