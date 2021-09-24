import './App.css';
import {useState} from 'react';
import Headers from './components/Headers';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DiaryPage from './components/DiaryPage';

function App() {

  const [showButton , setShowbutton] = useState(true)


  return (
      <Router>
      <div className="container">
        
        <Headers showBtn={ showButton }/>
        <Route exact path="/">
          <Home setBtn={ setShowbutton }/>
        </Route>
        <Route path="/diary-page/:id"  >
          <DiaryPage showBtn={ setShowbutton }/>
        </Route >
    </div>
    </Router>
  );
}

export default App;
