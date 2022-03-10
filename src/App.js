import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Home from "./components/Layout/Home/Home";
import Footer from "./components/Layout/Footer/Footer";
import HeroSearch from "./components/Layout/Home/Hero/HeroSearch";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={HeroSearch} path="/search"/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
