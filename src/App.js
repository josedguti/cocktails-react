import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
   <Router>
     <Navbar />
     <Switch>
       <Route exact path='/'>
         <Home />
       </Route>
       <Route path='/about'>
         <About />
       </Route>
       <Route path='/cocktail/:id'>
         <SingleCocktail />
       </Route>
       <Route path='*'>
         <Error />
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
