import { BrowserRouter, Route, Switch } from 'react-router-dom';


import About from "./components/About";
import Home from "./components/Home";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";

import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route component = { Home } path = '/' exact/>
        <Route component = { About } path = '/about'/>
        <Route component = { Post } path = '/post'/>
        <Route component = { Project } path = '/project'/>
        <Route component = { SinglePost } path = '/post/:slug'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
