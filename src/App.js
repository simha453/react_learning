import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Button from "./Button";
import Button2 from "./Button2";
import Posts from "./posts/Posts";
import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./BlogDetails";
function App() {
  let hello = <h1>Hello world</h1>;

 return (
  <Router>
    <div className="App">
      {/* <Posts/> */}
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
        <Home />
        </Route>
        <Route path="/Create">
        <Create />
        </Route>

        <Route path="/blogs/:id">
        <BlogDetails />
        </Route>
        </Switch>
        
      </div>
    </div>
</Router>
  );
 
}

export default App;
