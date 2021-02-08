import MarketList from './components/MarketList'; 
//import Home from './pages/Home';
import SignUp from './LoginComponents/SignUp';
import SignIn from './LoginComponents/SignIn';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {PrivateRoute} from '../src/utils/PrivateRoute';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <Router>
    <div className = "App">
     {/* <Route exact path ="/" component={Home}/> */}
   <Route exact path ="/" component={SignIn}/>
   <Route exact path ="/sign-up" component={SignUp}/>
   <PrivateRoute exact path = "/protected">
     <MarketList/>
     </PrivateRoute>
    
    </div>
    </Router>
  );
}
  

export default App;
