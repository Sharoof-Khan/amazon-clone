
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

          <Route path='/checkout'>
            <Header />
            <h1>Your Cart IS Empty</h1>
          </Route>

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
