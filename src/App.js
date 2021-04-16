import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Back from './Back';
import 'bootstrap/dist/css/bootstrap.min.css'
import Choice from './Choice';
import Front from './Front';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> WEB SCRAPPER</div>
        <BrowserRouter>
        <div className="m-5">
        <Switch>
          <Route path="/" exact component={Choice}/>
          <Route path="/flipkart/scrap" exact component={Back}/>
          <Route path="/amazon/scrap" exact component={Front}/>
        </Switch>
        </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
