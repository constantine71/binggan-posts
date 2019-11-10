import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import NotFound from "./components/notFound";
import Post from "./components/post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/posts/:post_id" component={Post}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/home"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
