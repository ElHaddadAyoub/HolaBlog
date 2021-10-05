import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails'
import NotFound from './components/NotFound';
import { BrowserRouter as Router , Route ,Switch } from 'react-router-dom';
// npx json-server --watch data/db.json --port 8000 : command for run server of Json
function App() {

  const title = "Welcome my blog";
  const likes = 10;
  const link_to_google = "http://www.google.com";



  return (
    <Router>
    <div className="App">
      <div className="content">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/create" component={Create}></Route>
          <Route path="/blog/:id" component={BlogDetails}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
