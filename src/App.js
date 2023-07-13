import Agriclture from "./Agriculture";
import Cards from "./Cards";
import Education from "./Education";
import Hero from "./Hero";
import Job from "./Job";
import Navbar from "./Navbar";
import About from "./about";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
          <div className="App">
            <Navbar /> 
            <Switch>

                <Route exact path='/'>
                  <Hero />
                </Route>

                <Route path='/resources'>
                  <Cards />
                </Route>
                
                <Route path='/agriculture'>
                  <Agriclture />
                </Route>

                <Route path='/education'>
                  <Education />
                </Route>
                
                <Route path='/fuzu'>
                  <Job />
                </Route>

                <Route>
                  <About />
                </Route>

            </Switch>
          </div>
    </Router>
  );
}

export default App;
