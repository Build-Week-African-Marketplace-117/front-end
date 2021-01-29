
import './App.css';
import MarketList from './components/MarketList';
import Home from './pages/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {PrivateRoute} from '../src/utils/PrivateRoute';


function App() {
  return (
    <Router>
    <div className="App">
   <Route exact path ="/" component={Home}/>
   <PrivateRoute exact path = "/protected">
     <MarketList/>
     </PrivateRoute>
    
    </div>
    </Router>
  );
}
  

export default App;
