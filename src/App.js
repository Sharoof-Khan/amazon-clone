
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';

function App() {

  const [{},dispatch] = useStateValue()
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The user is  ==> ', authUser);
      
      if (authUser) {
        // the  user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      } else {
        // The user is logged out

        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })

  },[])
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
            
    <Routes>
        {/* <Switch> */}

          <Route path="/" element = {<> <Header /> < Home/></>} />
        <Route path="/checkout" element={<> <Header/> <Checkout />  </>} />
        <Route path="/login" element={<Login />} />
        

          
      {/* </Switch> */}


    </Routes>
      </div>
  );
}

export default App;
