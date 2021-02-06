import Nav from "./components/Nav";
import Main from "./components/pages/Main"
import Saved from "./components/pages/Saved";
import Search from "./components/pages/Search";
import {BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Main/>
    <Nav/>
    <Saved/>
    <Search/>
    </>
  )
}

export default App;
