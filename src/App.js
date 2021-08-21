import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return <div className="app">
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Home}/>
    </Switch>

    </Router>
  </div>
}

export default App;
