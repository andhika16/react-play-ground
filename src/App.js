import './App.css';
import Headers from './components/Headers';
import Home from './components/Home';
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import DiaryPage from './components/DiaryPage';

function App() {

  const [dataDiary, setDataDiary] = useState([])
  const url = 'http://localhost:8000/posts/'
  // fetching data menggunakan useEffect
  useEffect(() => {
      
    const getDataDiary = async () => {
      const dataDiaryFromServer = await fetchDiary()
      setDataDiary(dataDiaryFromServer)
      }
    
      getDataDiary()
    
  }, [])

  const fetchDiary = async () => {
    
    const res = await fetch(url)
    const data = res.json()
    return data
  }


  const handlePostDiary = async (diary) => {

    const res =  await fetch(`http://localhost:8000/posts`, {
      method: 'POST',
      headers: {'Content-Type' : 'Application/json'},
      body : JSON.stringify(diary)
   })

    const data = await res.json()
    setDataDiary([...dataDiary,data])

  }



  


  return (
    <div className="container">
      <Router>
        <Headers />
        <Switch>
        <Route exact path="/">
            <Home data={dataDiary}
              onAdd={handlePostDiary}
            />
        </Route>
        <Route path="/diary-page/:id" component={DiaryPage} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
