
import './App.css';
import MarketList from './components/MarketList';
import Home from './pages/Home';
import SignUp from './Conponents/SignUp';
import SignIn from './Conponents/SignIn';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {PrivateRoute} from '../src/utils/PrivateRoute';


function App() {
  return (
    <Router>
    <div className = "App">
   <Route exact path ="/" component={Home}/>
   <Route exact path ="/sign-in" component={SignIn}/>
   <Route exact path ="/sign-up" component={SignUp}/>
   <PrivateRoute exact path = "/protected">
     <MarketList/>
     </PrivateRoute>
    
    </div>
    </Router>
  );
}
  

export default App;
