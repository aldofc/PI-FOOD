import './App.css';
import LandingPage from './components/Pages/LandingPage/LandingPage';
import Home from './components/Pages/Home/Home.jsx'
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>

      </Switch>
    </div>
  );
}

export default App;
