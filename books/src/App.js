import Nav from "./components/Nav";
import Saved from "./components/pages/Saved";
import Search from "./components/pages/Search";
import Wrapper from "./components/Wrapper";

import {BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
       <div>
         <Nav/>
         <Wrapper>
         <Route exact path="/" component={Search} />
         <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
         </Wrapper>
    </div>
    </Router>
   
  );
}

export default App;
