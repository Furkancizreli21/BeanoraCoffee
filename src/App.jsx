import "./App.css";
import About from "./components/About";
import Coffees from "./components/Coffees";
import Comments from "./components/Comments";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Coffees />
      <About />
      <Comments />
    </>
  );
}

export default App;
