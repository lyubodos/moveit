import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Layout/Header/Header';

function App() {
  return (
   <Router>
    <Header />
   </Router>
  );
}

export default App;
