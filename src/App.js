
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (

    <Router >
      <div className="App">
      {/* <h1>SHAHRUKH KHAN</h1> */}
        <Switch>


          <Route path='/' >
          <Header />
          <Home/>


          </Route>
          
      </Switch>

      </div>
    </Router>
  );
}

export default App;
