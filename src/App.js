// import logo from './logo.svg';
import "./App.css";
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { About, Contact, Resume, Skills, Projects } from "./components/Pages";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Route exact={true} path="/" component={About} />
        <Route exact path="/project" component={Projects} />
        <Route exact path="/skill" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </div>
    </>
  );
}

export default App;
