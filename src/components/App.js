
import React from "react";
import './../styles/App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <div>
     <Router>
      <Switch>
         <Route path='/' exact component={ItemList}></Route>
        <Route path="/items/:id" exact component={ItemDetail}></Route>
        
      </Switch>
     </Router>
    </div>
  )
}

export default App
