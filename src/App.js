import './App.css';
import Home from './Pages/Home';
import Search from './Pages/Search';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          {/* Search Route */}
          <Route path='/search'>
            <Search />
          </Route>

          {/* Home Route */}
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
