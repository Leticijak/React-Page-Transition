import { useLocation, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import Page from "./pages/Page";
import styled from "styled-components";

const Section = styled.section`
  overflow-x: hidden;
`;
function App() {
  let location = useLocation();

  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/page" component={Page} exact />
        </Switch>
      </AnimatePresence>
    </Section>
  );
}

export default App;
