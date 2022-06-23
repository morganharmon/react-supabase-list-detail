import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ImagesPage from './ImagesPage.js';
import ImageDetail from './ImageDetail.js';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <ImagesPage />
          </Route>
          <Route exact path='/ImageDetail/:id'>
            <ImageDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
