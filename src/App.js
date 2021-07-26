import Heading from './components/Heading';
import Section from './components/Section';
import DoctorPage from './components/DoctorPage';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch

} from "react-router-dom";
import './App.css';
function App() {

  return (
    <>
        <Router >
          <Navbar  />
        <Switch>
          <Route  path="/doctorPage">
            <DoctorPage />
          </Route>
          <Route exact path="/">
            <Heading />
            <Section />
          </Route>
        </Switch>
        </Router>
   
    </>
  );
}

export default App;
