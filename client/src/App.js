import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import Home from './Pages/Home/Home';
import NavBar from './components/Navbar/Navbar';
import Create from './Pages/Create/Create';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/' component={NavBar}/>
        </Switch>

        <Route exact path='/home' component={Home}/>
        <Route exact path='/create' component={Create}/>
        
    </div>
  );
}

export default App;
