import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Home from "./components/Layout/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
