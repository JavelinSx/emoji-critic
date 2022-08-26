
import './App.css';
import Header from "./Header"
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AboutMe from './AboutMe';
import Reviews from './Reviews';

function App() {
  return (
    <div className="App">

     <Header />

     <Route path="/">
      <Dashboard />
     </Route>

     <Route path="/reviews">
      <Reviews />
     </Route>

     <Route path="/about-me">
      <AboutMe />
     </Route>

    </div>
  );
}

export default App;
