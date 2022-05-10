
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Checkout from './components/Checkout';

function App() {
  return (

   /* <Router >
      <div className="App">
            <Header />
        <Switch>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/" >
            <Home />
          </Route>
          
      </Switch>

      </div>
    </Router>
    */  // React-router-dom v5.2


      <div className="App">
            <Header />
    <Routes>
        {/* <Switch> */}

          <Route path="/" element = {<Home/>} />
          <Route path="/checkout" element = {<Checkout />} />

          
      {/* </Switch> */}


    </Routes>
      </div>
  );
}

export default App;
