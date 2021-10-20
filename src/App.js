import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Button from "./Button";
import Button2 from "./Button2";
import Posts from "./posts/Posts";
import Navbar from "./Navbar";
import Home from "./Home";
function App() {
  let hello = <h1>Hello world</h1>;

  return (
    <div className="App">
      {/* <Posts/> */}
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
